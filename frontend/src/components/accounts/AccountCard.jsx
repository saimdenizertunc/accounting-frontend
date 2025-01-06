import { CreditCard, Wallet, PiggyBank, FileText } from 'lucide-react';

const ACCOUNT_ICONS = {
  CASH: Wallet,
  BANK: CreditCard,
  SAVINGS: PiggyBank,
  PAYABLE: FileText,
};

function AccountCard({ type, name, balance, currency, description }) {
  const Icon = ACCOUNT_ICONS[type] || Wallet;

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-primary">
            {currency} {balance.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountCard;