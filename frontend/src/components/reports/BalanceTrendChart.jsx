import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  function BalanceTrendChart() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Balance Trend',
        },
      },
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    };
  
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
    const data = {
      labels,
      datasets: [
        {
          label: 'Total Balance',
          data: [18000, 19500, 22000, 24000, 23500, 25420],
          borderColor: '#274c67',
          backgroundColor: 'rgba(39, 76, 103, 0.1)',
          fill: true,
        },
      ],
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <div className="h-[300px]">
          <Line options={options} data={data} />
        </div>
      </div>
    );
  }
  
  export default BalanceTrendChart;