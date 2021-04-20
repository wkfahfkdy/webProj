<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");
	response.setContentType("text/html;charset=UTF-8");
	response.setCharacterEncoding("UTF-8");
	
	String id = request.getParameter("id");
	String name = request.getParameter("name");
	String score = request.getParameter("score");
	String gender = request.getParameter("gender");
	out.print("<ul>");
	out.print("<li>" + id + "</li>");
	out.print("<li>" + name + "</li>");
	out.print("<li>" + score + "</li>");
	out.print("<li>" + gender + "</li>");
	out.print("</ul>");
%>