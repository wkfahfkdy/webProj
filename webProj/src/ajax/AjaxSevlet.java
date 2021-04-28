package ajax;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ajax.html")
public class AjaxSevlet extends HttpServlet {
	/*
	 * get 은 조회용 post 는 등록/삭제 그런 용도 라고 생각 가능
	 */
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// req 로 가져오고 resp 로 내보냄
		String p1 = req.getParameter("p1");
		String p2 = req.getParameter("p2");
		resp.getWriter().print("<h1>Ajax Get Page</h1>");
		resp.getWriter().print("<h3>" + p1 + ", " + p2 + "</h3>");
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}
}
