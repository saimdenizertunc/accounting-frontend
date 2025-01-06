function DashboardStats({ stats }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: 'Total Balance',
            value: '$25,420.00',
            change: '+12.5%',
            isPositive: true,
          },
          {
            title: 'Monthly Income',
            value: '$8,250.00',
            change: '+5.2%',
            isPositive: true,
          },
          {
            title: 'Monthly Expenses',
            value: '$4,320.00',
            change: '-2.4%',
            isPositive: false,
          },
          {
            title: 'Savings Rate',
            value: '47.6%',
            change: '+3.2%',
            isPositive: true,
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4"
          >
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            <p className={`text-sm mt-1 ${
              stat.isPositive ? 'text-success' : 'text-danger'
            }`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    );
  }
  
  export default DashboardStats;