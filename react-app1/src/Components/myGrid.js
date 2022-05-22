import * as React from 'react';
import { useEffect,useState } from 'react';
import { getData } from '../Data';
import { DataGrid } from '@mui/x-data-grid';

import { Grid } from '@mui/material';
import {AddDialog} from '../Functions/Add';

import {DeleteDialog} from '../Functions/Delete'
import Button from '@mui/material/Button';
import {EditDialog} from '../Functions/Edit';
import TextField from '@mui/material/TextField';
import { lineHeight } from '@mui/system';
import { Search } from '../Data';
import {ButtonGroup, Typography} from '@mui/material';

import { SearchDialog } from '../Functions/Asearch';

export  function MyGrid(){
    const [data,setData] =useState([]);
    const [selected,setSelected]=useState([]);
    const [page,setpage]=useState(0);

    const  refresh =  async() =>{
     
        setpage(0)
        
   }
    
    
    const columns=[{field:"sl_no",headerName:"Sl                   no",align:"left"},{field:"business_code",headerName:"Business Code"},
    {field:"cust_number",headerName:"Customer Number"} ,{field:"clear_date",headerName:"Clear        Date"},{field:"buisness_year",headerName:"Business Year"},
    {field:"doc_id",headerName:"Document    Id" },{field:"posting_date",headerName:"Posting    Date"},{field:"document_create_date",headerName:"Document Create      Date"},
    {field:"due_in_date",headerName:"Due           Date"},{field:"invoice_currency",headerName:"Invoice Currency"},{field:"document_type",headerName:"Document Type"} ,
    {field:"posting_id",headerName:"Posting        Id"},{field:"total_open_amount",headerName:"Total        Open       Amount"},
    {field:"baseline_create_date",headerName:"Baseline Create        Date"},{field:"cust_payment_terms",headerName:"Customer Payment        terms"},{field:"invoice_id",headerName:"Invoice          Id"}
    ];
    
    const [buisness,setbuisness]=[{business_code:'',cust_number:'',clear_date:'',buisness_year:'',
  doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',document_type:'',
  posting_id:'',total_open_amount:'',baseline_create_date:'',cust_payment_terms:'',invoice_id:''}];
    
    const {business_code,
    cust_number ,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id}=buisness;
    
    const [pageSize, setPageSize] = useState(5);
   
   
   
  
    useEffect( async ()=>{
         setData(await getData())
    },[]);


//     useEffect( async ()=>{
//       console.log(selected[0])
//  },[selected]);


   const [text,setText]=useState("");
   let handleChange=(e)=>{
     setText(e.target.value)
   };
   
   let search=(rows)=>{
     return rows.filter((row)=> row.cust_number.toString().indexOf(text) >-1);
   };
   
 

  return (
    <>
     
   
     <Grid container spacing={1}>
            <Grid item xs={5}>
     <ButtonGroup >
     <Button variant="outlined" sx={{
    
    '&:hover': {
      backgroundColor: '#33B8FF',
      color: 'blue',
      
  }
  }}style={{color:'white',borderColor:"#33B8FF"}}
  >Predict</Button>
     
     <Button variant="outlined" sx={{
    
      '&:hover': {
        backgroundColor: '#33B8FF',
        color: 'blue',
        
    }
    }}style={{color:'white',borderColor:"#33B8FF"}} size="lg"
    >Analytics View</Button>
     
     <SearchDialog setData={setData}  />
    
     <Button variant="outlined" onClick={refresh} sx={{
    
    '&:hover': {
      backgroundColor: '#33B8FF',
      color: 'blue',

      
  }
  }}style={{color:'blue',borderColor:"#33B8FF"}}
  >⟳</Button>
     </ButtonGroup>
     </Grid>
     
     <Grid item xs={2}>
     <TextField onChange={handleChange} fullWidth variant="filled" color='primary' style={{
     backgroundColor: "white"}} label="Search Customer Id" /> 
     </Grid>    
     <Grid item xs={5}>
     <ButtonGroup style={{float:"right"}}>
     <AddDialog business_code={business_code} 
     cust_number={cust_number}
     clear_date={clear_date}
     buisness_year={buisness_year}
     doc_id={doc_id}
     posting_date={posting_date}
     document_create_date={document_create_date}
     due_in_date={due_in_date}
     invoice_currency={invoice_currency}
     document_type={document_type}
     posting_id={posting_id}
     total_open_amount={total_open_amount}
     baseline_create_date={baseline_create_date}
     cust_payment_terms={cust_payment_terms}
     invoice_id ={invoice_id}
     
     
     />
     <EditDialog sl_no={selected[0]} selected={selected} />
     <DeleteDialog sl_no={selected[0]} selected={selected} />
     </ButtonGroup>
     </Grid> 
     </Grid> 
     <br/>
    <div style={{ height: 450, width: '100%' }}>
      
      <DataGrid autoHeight 
      sx={{
        "& .MuiDataGrid-columnHeaderTitle": {
          textOverflow: "clip",
          whiteSpace: "break-spaces",
          lineHeight: 1.5,
          color:"white"
        },
        "& .MuiDataGrid-row": {
          color:"black"
        },
        "& .MuiDataGrid-cellContent" : {
          color: "white",
      },
      
      "& .MuiSvgIcon-root":{
        color : "white"
      },
      "& .css-rtrcn9-MuiTablePagination-root":{
         color : "white"
      },
      "& .MuiDataGrid-selectedRowCount ":{
        color:"white"
      },
      "& .MuiDataGrid-iconSeparator": {
        display: "none",
      },
        backgroundColor:"#254E64",
        color:"white",
        borderBlockColor:"black"
        }}
      style={{color:'white'}}

       onSelectionModelChange={(itm) => {
        setSelected(itm);
        
       }}
        getRowId={(row)=>row.sl_no}
        rows={search(data)}
        columns={columns}
        pageSize={pageSize}
        
        checkboxSelection={true}
        rowHeight={30}
        onPageChange={(page) => setpage(page)}
        page={page}
      
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
        
        
      />
      <br/>


      {/* <footer style={{color: "white", bottom: 0,marginLeft:"40%",marginBottom:"1%"}}>
    <center>Copyright 2022 Highradius.All Rights Reserved.</center>
  </footer> */}





       <Grid container spacing={1} >
    
    <Grid item xs={0} >
  <Typography align='center' color='blue'  >
    
     &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; 
     &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Privacy Policy| 
     
  </Typography>
  
  </Grid>
  <Grid item xs={0} >
  <Typography  align='center' >
  © 2022 HighRadius Corporation. All rights reserved.
  </Typography>
  </Grid>
  </Grid> 
    </div>
    </>
  );
}

