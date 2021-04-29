package ajax;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.DBCon;

@WebServlet("/jquery/memberServlet.do")	/* .do 대신 .html 도 무관
										   이 파일을 켰을 때 주소를 /jquery/memberServlet.do 로 설정한다는 말
										   가상 주소 같은 느낌
										   /jquery/memberServlet.do 는 타인이 이 페이지를 접속할 때의 주소를 의미함
										   ex) 219.54.12.432/WebProj/jquery/memberServlet.do
										*/
public class MemberSevlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberSevlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		// 조회작업
		Connection conn = DBCon.getConnect();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		
		String sql = "select member_id, member_name, member_age from member";
		String json = "[";
		// 조회 sql 작성
		
		try {
			psmt = conn.prepareStatement(sql
					,ResultSet.TYPE_SCROLL_INSENSITIVE		// 스크롤 = 양방향 > 역방향으로 볼 수 잇다
					,ResultSet.CONCUR_UPDATABLE);			// rs가 가지고 있는 레코드를 직접 수정해야할 경우 필요
															// 결론 : 뒤로 좀 돌아가서 수정할려면 2개가 필요하다
			rs = psmt.executeQuery();	
			while (rs.next()) {	//이까지는 스스로 함. 이후부터 담을 줄 모르겠음 (while 내용x)
				int memId = rs.getInt(1); // 1 대신 member_id 써도 가능하다함
				String memName = rs.getString(2);
				int memAge = rs.getInt(3);
				
				json += "{\"Id\":\"" + memId + 
						"\", \"Name\":\"" + memName + 
						"\", \"Age\":\"" + memAge + "\"}";
				
				if (!rs.isLast()){		// 커서가 마지막 행에 있으면 true 그 외의 위치에 있거나 결과 집합에 행이 들어 있지 않으면 false
										// 이거를 사용하기 위해서 위에 스크롤과 업데이터가 필요했다고 한다.
					json += ",";
					
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (psmt != null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		
		json += "]";
		
		// 조회 결과를 json 형식으로 작성
		// [{"id":1, "name":"hong", "age": 20},
		// [{"id":1, "name":"hong", "age": 20},
		// [{"id":1, "name":"hong", "age": 20},]
		
		//결과를 response.getWriter().print(); 로 출력
		
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 입력작업
		String p1 = request.getParameter("m_id");
		String p2 = request.getParameter("m_name");
		String p3 = request.getParameter("m_age");
		
		Connection conn = DBCon.getConnect();
		PreparedStatement psmt = null;
		String sql = "insert into member values(?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, p1);
			psmt.setString(2, p2);
			psmt.setString(3, p3);
			int r = psmt.executeUpdate();
			System.out.println(r + "건 입력");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (psmt != null) {
				try {
					psmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if(conn != null ) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		// {"id":1, "name":"hong", "age":20}
		String json = "{\"id\":" + p1 + ", \"name\":\"" + p2 + "\", \"age\":" + p3 + "}";
		response.getWriter().print(json);
	}

}
