package com.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取前端参数
        String med=req.getParameter("method");
        if(med.equals("add")){
            req.getSession().setAttribute("masg","执行add方法");
        }
        if(med.equals("del")){
            req.getSession().setAttribute("masg","执行del方法");
        }

        //调用业务层

        //转发/重定向
        req.getRequestDispatcher("/WEB-INF/jsp/servlet_index.jsp").forward(req,resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
