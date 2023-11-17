import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import useFetch from '../hook/useFetch'
const colums = [
     {field:'name',headerName:'Name',width:180,style: { border: '2px solid #0d3b66' }},
     {field:'email',headerName:'Email',width:220 ,style: { border: '2px solid #0d3b66' }},
     {field:'address',headerName:'Address',width:300
     ,style: { border: '2px solid #0d3b66' },
    renderCell:(params) => (
      <div>
        <p>{params.row.address.street},{params.row.address.city},{params.row.address.zipcode}</p>
      </div>
    )
    },
     {field:'phone',headerName:'Number',width:175,style: { border: '2px solid #0d3b66' }},
     {field:'website',headerName:'Website',width:140,style: { border: '2px solid #0d3b66' } },
     {field:'company',headerName:'Company',width:170,
    renderCell:(params) => (
      <div>
        <p>{params.row.company.name}
        </p>
      </div>
    )
    ,style: { border: '2px solid #0d3b66' }
    },
]
const Grid = () => {
  const {data} = useFetch();
  const gridStyle = {
    background:"#faf0ca",
    color:'#0d3b66'
  }
  return (
    <div style={{width:'90%',height:'700',marginLeft:'5%'}}>
     <DataGrid 
     rows={data}
     columns={colums}
     pageSize={10}
    style={{...gridStyle}}
/>
    </div>
  )
}

export default Grid