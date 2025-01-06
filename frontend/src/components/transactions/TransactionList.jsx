import { format } from 'date-fns';
import { ArrowDownRight, ArrowUpRight, ArrowRightLeft } from 'lucide-react';

function TransactionList() {
  const transactions = [
    {
      id: '1',
      type: 'income',
      amount: 1000,
      category: 'Salary',
      date: '2024-03-20',
      description: 'Monthly salary',
      account_id: '1',
    },
    {
      id: '2',
      type: 'expense',
      amount: 50,
      category: 'Food',
      date: '2024-03-19',
      description: 'Grocery shopping',
      account_id: '1',
    },
    {
      id: '3',
      type: 'transfer',
      amount: 500,
      category: 'Transfer',
      date: '2024-03-18',
      description: 'To savings',
      account_id: '1',
      target_account_id: '2',
    },
  ];

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'income':
        return <ArrowUpRight className="h-5 w-5 text-success" />;
      case 'expense':
        return <ArrowDownRight className="h-5 w-5 text-danger" />;
      case 'transfer':
        return <ArrowRightLeft className="h-5 w-5 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="px-4 py-3 flex items-center hover:bg-gray-50"
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              {getTransactionIcon(transaction.type)}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {transaction.category}
              </p>
              <p className="text-sm text-gray-500">{transaction.description}</p>
            </div>
            <div className="text-right">
              <p
                className={`text-sm font-medium ${
                  transaction.type === 'income'
                    ? 'text-success'
                    : transaction.type === 'expense'
                    ? 'text-danger'
                    : 'text-primary'
                }`}
              >
                {transaction.type === 'expense' ? '-' : ''}${transaction.amount}
              </p>
              <p className="text-sm text-gray-500">
                {format(new Date(transaction.date), 'MMM d, yyyy')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;