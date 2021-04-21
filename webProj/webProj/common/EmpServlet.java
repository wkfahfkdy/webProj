package common;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/empList.do")
//생성할때는 '/' 필요한듯??? >> ajax.html 에서 보면 /emplist.do 가 아니라 emplist.do 를 적음. 아마도 불러올때는 필요없나봄
public class EmpServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		super.doGet(req, resp); // doGet 방식 요청. Empservlet에 2개의 메서드 호출됨
		PrintWriter out = resp.getWriter(); // out 변수는 파일stream .

		String dept = req.getParameter("dept");

		EmpDAO dao = new EmpDAO();

		List<Employee> list = dao.getEmpList();

		if (dept == null) {
			list = dao.getEmpList();
		} else {
			list = dao.getEmpByDept(dept);
		}

		String jsonData = "[";
		// [ {"empId":"?", "fName":"?", "IName":"?"}, ... ]
		int cnt = 0;
		for (Employee emp : list) {
			jsonData += "{\"empId\":\"" + emp.getEmployeeId() + "\", \"fName\":\"" + emp.getFirstName()
					+ "\", \"lName\":\"" + emp.getLastName() + "\", \"email\":\"" + emp.getEmail() + "\", \"salary\":\""
					+ emp.getSalary() + "\"}";
			if (++cnt == list.size()) {
				continue;
			}
			jsonData += ",";
		}

		jsonData += "]";

		out.println(jsonData);
	}
	// http://localhost : 서버정보 / webpro : 프로젝트 정보 / empList : url 정보
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String lastName = req.getParameter("last_name");
		String email = req.getParameter("email");
		String hireDate = req.getParameter("hire_date");
		String jobId = req.getParameter("job_id");
		
		Employee emp = new Employee();
		emp.setLastName(lastName);
		emp.setEmail(email);
		emp.setHireDate(hireDate);
		emp.setJobId(jobId);
				
		EmpDAO dao = new EmpDAO();
		dao.insertEmp(emp);
		
		resp.getWriter().print("<h1>Success</h1>");
	}

}