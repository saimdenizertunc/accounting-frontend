import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function IncomeExpenseChart() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Income vs Expenses',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
    const data = {
      labels,
      datasets: [
        {
          label: 'Income',
          data: [6500, 5900, 8000, 8100, 7800, 8250],
          backgroundColor: '#36b37e',
        },
        {
          label: 'Expenses',
          data: [4100, 3900, 4200, 4500, 4100, 4320],
          backgroundColor: '#ff5630',
        },
      ],
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="h-[300px]">
          <Bar options={options} data={data} />
        </div>
      </div>
    );
  }
  
  export default IncomeExpenseChart;