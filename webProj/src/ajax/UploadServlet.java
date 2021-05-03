package ajax;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/jquery/uploadServlet")
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UploadServlet() {

	}

	@Override
	public void init() throws ServletException {
		System.out.println("init call()");
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) 
			throws ServletException, IOException {
		System.out.println("service call()");
		Enumeration<String> enumer = req.getHeaderNames();
		while(enumer.hasMoreElements()) {
			String key = enumer.nextElement();
			String val = req.getHeader(key);
			System.out.println(key + " : " + val);
		}
	}
	// service 메소드를 주석처리하고 실행해보면 doGet이 실행된다.
	// 이걸 주석처리 하지않으면 doGet이던 doPost던 방식을 적어두지않으면 두 개 상관없이 이거 실행

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("doGet call()");

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("doPost call()");
	}

}
