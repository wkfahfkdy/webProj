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
		// 조회작업
		Connection conn = DBCon.getConnect();
		PreparedStatement psmt = null;
		ResultSet rs = null;
		
		String sql = "select * from member";
		// 조회 sql 작성
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		// 조회 결과를 json 형식으로 작성
		// [{"id":1, "name":"hong", "age": 20},
		// [{"id":1, "name":"hong", "age": 20},
		// [{"id":1, "name":"hong", "age": 20},]
		
		//결과를 response.getWriter().print(); 로 출력
		
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().print("");
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
		
		response.getWriter().print("<h2>정상 입력</h2>");
	}

}
