package fileBoard;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@WebServlet("/getFileListServelet")
public class GetFileListServelet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetFileListServelet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// json 데이터 > DAO에 전체 리스트 메소드
		// [{},{},{} ... ]
		// JSONObject, JSONArray
		JSONArray ary = new JSONArray();
		FileDAO dao = new FileDAO();
		List<FileVO> list = dao.getFileList();
		
		for(FileVO vo : list) {
			JSONObject obj = new JSONObject();
			obj.put("num", vo.getNum());
			obj.put("author", vo.getAuthor());
			obj.put("title", vo.getTitle());
			obj.put("day", vo.getDay());
			obj.put("fileName", vo.getFileName());
			ary.add(obj);
		}
		response.getWriter().print(ary);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
