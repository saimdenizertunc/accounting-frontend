import AccountCard from './AccountCard';

function AccountList() {
  const accounts = [
    {
      id: '1',
      type: 'CASH',
      name: 'Wallet',
      balance: 1200.00,
      currency: '$',
      description: 'Daily expenses',
    },
    {
      id: '2',
      type: 'BANK',
      name: 'Main Account',
      balance: 15420.00,
      currency: '$',
      description: 'Primary checking account',
    },
    {
      id: '3',
      type: 'SAVINGS',
      name: 'Emergency Fund',
      balance: 8800.00,
      currency: '$',
      description: 'Emergency savings',
    },
    {
      id: '4',
      type: 'PAYABLE',
      name: 'Credit Card',
      balance: -2500.00,
      currency: '$',
      description: 'Monthly credit card',
    },
  ];

  const groupedAccounts = accounts.reduce((groups, account) => {
    if (!groups[account.type]) {
      groups[account.type] = [];
    }
    groups[account.type].push(account);
    return groups;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(groupedAccounts).map(([type, accounts]) => (
        <div key={type}>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{type}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accounts.map((account) => (
              <AccountCard key={account.id} {...account} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccountList;