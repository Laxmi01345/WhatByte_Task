import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";
interface LineChartProps {
    value: number; // Specify the type of value here
  }
  const LineChartComponent: React.FC<LineChartProps> = ({ value }) => {
  const [chartData, setChartData] = useState([
    { numberOfStudent: 0, percentage: 0 },
    { numberOfStudent: 50, percentage: 25 },
    { numberOfStudent: 25, percentage: 50 },
    { numberOfStudent: 80, percentage: 75 },
    { numberOfStudent: 10, percentage: 100 },
  ]);

 
  useEffect(() => {
    
    const newValue = { numberOfStudent: Math.floor(Math.random() * 100), percentage: value };
    
   
    setChartData((prevData) => {
    
      const existingIndex = prevData.findIndex((item) => item.percentage === value);
      if (existingIndex === -1) {
        return [...prevData, newValue];
      } else {
        const updatedData = [...prevData];
        updatedData[existingIndex] = newValue;
        return updatedData;
      }
    });
  }, [value]); 

  return (
    <div className="">
      
      <LineChart
        data={chartData}
        width={360}
        height={300}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        <Tooltip />
        <Line type="monotone" dataKey="numberOfStudent" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
      
    </div>
  );
}
export default LineChartComponent;