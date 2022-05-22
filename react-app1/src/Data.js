import axios from "axios";

export const getData = async () => {

   let response = await axios.get("http://localhost:8080/H2H/Controller");
   let data = response.data.business;

   return data;
}

export const addData = async ({ business_code, cust_number, clear_date, buisness_year, doc_id,
   document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, posting_date,
   baseline_create_date, cust_payment_terms, invoice_id }) => {
   let data = "business_code=" + business_code + "&cust_number=" + cust_number + "&clear_date=" + clear_date + "&buisness_year=" + buisness_year + "&doc_id=" + doc_id + "&document_create_date=" + document_create_date + "&due_in_date=" + due_in_date + "&invoice_currency=" + invoice_currency + "&document_type=" + document_type + "&posting_id=" + posting_id + "&total_open_amount=" + total_open_amount + "&posting_date=" + posting_date + "&baseline_create_date=" + baseline_create_date + "&cust_payment_terms=" + cust_payment_terms + "&invoice_id=" + invoice_id;
   let response = await axios.get(
      `http://localhost:8080/H2H/AddBusiness?` + data
   );
   return response.data;
}
export const deleteData = async (sl_no) => {
   let data = "sl_no=" + sl_no;
   let response = await axios.get(
      `http://localhost:8080/H2H/DeleteData?` + data
   );
   return response.data;
}
export const Search = async (doc_id, invoice_id, cust_number, buisness_year) => {
   let data = "doc_id=" + doc_id + "&invoice_id=" + invoice_id + "&cust_number=" + cust_number + "&buisness_year=" + buisness_year;
   let response = await axios.get('http://localhost:8080/H2H/AdSearch?' + data
   );
   return response.data;
}

export const Predict = async () => {
   let response = await axios.get('http://127.0.0.1:5000/');
   return response.data;
}

//    export const EditData=async(invoice_currency,cust_payment_terms,sl_no)=>{
//       let data="sl_no=" + sl_no+"&invoice_currency" + invoice_currency + "&cust_payment_terms"+cust_payment_terms;
//    let response=await axios.get(
//       `http://localhost:8080/H2H/EditData?`+data
//     );
//    return response.data;
// }

export const EditData = async (invoice, sl_no) => {
   console.log(sl_no);
   console.log(invoice);
   return await axios.get(
      `http://localhost:8080/H2H/EditData?sl_no=${sl_no}&invoice_currency=${invoice["invoice_currency"]}&cust_payment_terms=${invoice["cust_payment_terms"]}`
   );
};




// const getData=()=>{
    //   axios
    //   .get('http://localhost:8080/H2H/Controller')
    //   .then((res)=>{
    //     console.log(res.data.business)
    //     setData(res.data.business);
    //   })