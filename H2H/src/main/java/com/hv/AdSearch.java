package com.hv;

import java.io.IOException;
import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class AdSearch
 */
@WebServlet("/AdSearch")
public class AdSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdSearch() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HashMap<Object, Object> Response=new HashMap<Object,Object>();
		ArrayList<Business> Business=new ArrayList<Business>();
		try {
			
			String doc_id=request.getParameter("doc_id");
			int invoice_id=Integer.parseInt(request.getParameter("invoice_id"));
			int cust_number=Integer.parseInt(request.getParameter("cust_number"));
			String buisness_year=request.getParameter("buisness_year");
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull","root","harshit");
			String sql="Select * from winter_internship where doc_id=? and invoice_id=? and cust_number=? and buisness_year=? ";
			PreparedStatement ps=connection.prepareStatement(sql);
			
			ps.setString(1,doc_id);
			
			ps.setInt(2,invoice_id);
			ps.setInt(3, cust_number);
			ps.setString(4,buisness_year);
			ResultSet rSet=ps.executeQuery();
			while(rSet.next()) {
				 int sl_no=rSet.getInt("sl_no"),posting_id=rSet.getInt("posting_id");
   			 String business_code=rSet.getString("business_code");
   			 cust_number=rSet.getInt("cust_number");
   		 invoice_id=rSet.getInt("invoice_id");
   		String clear_date=rSet.getString("clear_date");
   			 buisness_year=rSet.getString("buisness_year");
   		  doc_id=rSet.getString("doc_id");
   		  String invoice_currency=rSet.getString("invoice_currency"),document_type=rSet.getString("document_type");
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
			// TODO: handle exception
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
