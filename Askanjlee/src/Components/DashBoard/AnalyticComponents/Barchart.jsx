import {Chart as Chartjs, LinearScale,CategoryScale,BarElement } from 'chart.js';
import React from 'react'
import { Bar } from 'react-chartjs-2';


Chartjs.register(LinearScale,CategoryScale,BarElement);

function Barchart() {
    const data = {
        labels: ['MatheMatics', 'Science', 'STEM', 'Olympiads'],
        datasets: [
          {
            label: 'Data Points',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(52, 144, 220, 0.7)',
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            beginAtZero: true,
          },
        },
      };
  return (
    <>
    <div className="mb-8 h-1/4">
      <h3 className="text-lg font-semibold mb-2 my-2">Analytics on Content Consumption</h3>
      <Bar data={data} options={options} />
    </div>
    </>
  )
}

export default Barchart