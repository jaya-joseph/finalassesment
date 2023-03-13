import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./Dashboard.css"
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);

  useEffect(() => {
    const chart1 = new Chart(chart1Ref.current, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#84ffff',
            borderWidth: 1,
            maxBarThickness: 70,
            minBarLength: 2,
            data: [12, 19, 15, 5, 2, 10, 7]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    const chart2 = new Chart(chart2Ref.current, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Revenue',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
                    
            data: [20, 35, 44, 50, 69, 76, 80]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    
        const chart3 = new Chart(chart3Ref.current, {
          type: 'pie',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Sales',
                backgroundColor: '#f50057',
                borderColor: '#84ffff',
                borderWidth: 1,
                maxBarThickness: 70,
                minBarLength: 2,
                data: [12, 19, 15, 5, 2, 10, 7]
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });

    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
    };
  }, []);




  return (
<div class='container'>
<Sidebar/>
  <canvas class='chart' ref={chart1Ref}></canvas>
  <canvas class='chart' ref={chart2Ref}></canvas>
  <canvas class='chart' ref={chart3Ref}></canvas>
</div>

  );
};

export default Dashboard;