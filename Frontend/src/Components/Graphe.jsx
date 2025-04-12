import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useEmploye } from "../Context/EmployeContext";
const COLORS = ["#82ca9d","#E45F5F", "#5555FF", ];
const data=[
    
]
const PieChartComponent = ({min=0,max=0,sum}) => {
  const data =[
    {value:max,numGuichet:'maximal'},
    {value:min,numGuichet:'minimal'},
   
    {value:sum,numGuichet:'total'},
  ]
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="numGuichet"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={({ name, value }) => `${name}: ${value}`}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;