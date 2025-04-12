// SalairePieChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEmploye } from '../Context/EmployeContext';
import { useEmployeStore } from '../store/EmployeStore';
import { useEffect, useState } from 'react';
const COLORS = ['#0d6efd', '#198754', '#dc3545', '#ffc107'];

export default function SalairePieChart({sum,min,max  }) {
  
const {minMaxSum,statisque}=useEmployeStore()
const employes=useEmploye()
const [mi,ma,su]=minMaxSum(employes)  

const chartData = [
    { name: 'Total', value:su  },
    { name: 'Min', value: mi },
    { name: 'Max', value: ma },
    
  ];
  
const [data,setData]=useState(chartData)
const fetch = async()=>{
    const r = await statisque()
    console.log(r)
    setData([
        { name: 'Total', value:parseInt( r.sum)  },
    { name: 'Min', value: parseInt(r.min) },
    { name: 'Max', value: parseInt(r.max) }   
    ])
}  
useEffect(()=>{
    const [mi,ma,su]=minMaxSum(employes) 
    setData([
        { name: 'Total', value:su  },
    { name: 'Min', value: mi },
    { name: 'Max', value: ma },
    ])
    console.log("s")
    fetch()
  },[employes])
return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
