package com.hv;

import java.io.IOException;
import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class Controller
 */
@WebServlet("/Controller")
public class Controller extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Controller() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HashMap<Object, Object> Response=new HashMap<Object,Object>();
		ArrayList<Business> Business=new ArrayList<Business>();
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull","root","harshit");
			PreparedStatement ps=connection.prepareStatement("SELECT *FROM winter_internship Limit 200;");
			ResultSet rSet=ps.executeQuery();
			while(rSet.next()) {
				 int sl_no=rSet.getInt("sl_no"),posting_id=rSet.getInt("posting_id");
    			 String business_code=rSet.getString("business_code");
    			int cust_number=rSet.getInt("cust_number");
    			int invoice_id=rSet.getInt("invoice_id");
    			String clear_date=rSet.getString("clear_date");
    			String buisness_year=rSet.getString("buisness_year");
    			 String doc_id=rSet.getString("doc_id"),invoice_currency=rSet.getString("invoice_currency"),document_type=rSet.getString("document_type");
    			 String cust_payment_terms=rSet.getString("cust_payment_terms");	 
    			 String posting_date=rSet.getString("posting_date");
    		 String document_create_date=rSet.getString("document_create_date");
    			
    		 String due_in_date=rSet.getString("due_in_date"),baseline_create_date=rSet.getString("baseline_create_date");
    			 double total_open_amount=rSet.getDouble("total_open_amount");
				Business business=new Business( sl_no,  business_code,  cust_number, clear_date, buisness_year,  doc_id,
						 posting_date,  document_create_date,  due_in_date,  invoice_currency,
						document_type,  posting_id,  total_open_amount,
						 baseline_create_date,  cust_payment_terms,invoice_id
						 );
				Business.add(business);
			}
			Response.put("business",Business);
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		Gson gson=new Gson();
		String jsonResponseString=gson.toJson(Response);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append(jsonResponseString);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
