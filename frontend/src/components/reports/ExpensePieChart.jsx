import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Pie } from 'react-chartjs-2';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  function ExpensePieChart() {
    const data = {
      labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping', 'Others'],
      datasets: [
        {
          data: [25, 15, 20, 18, 12, 10],
          backgroundColor: [
            '#36b37e',
            '#ff5630',
            '#ffab00',
            '#274c67',
            '#6554c0',
            '#8993a4',
          ],
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Expense Distribution',
        },
      },
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="h-[300px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    );
  }
  
  export default ExpensePieChart;