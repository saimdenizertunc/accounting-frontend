import TransactionForm from '../components/transactions/TransactionForm';
import TransactionList from '../components/transactions/TransactionList';

function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Transactions</h2>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">New Transaction</h3>
        <TransactionForm />
      </div>
      
      <TransactionList />
    </div>
  );
}

export default TransactionsPage;