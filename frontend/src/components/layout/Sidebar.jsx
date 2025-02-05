import { Home, Wallet, BarChart2, Settings, CreditCard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 p-4">
      {/* Budget Overview */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">TOTAL BALANCE</h2>
        <p className="text-2xl font-bold text-[#274c67]">$25,420.00</p>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        <NavItem to="/" icon={<Home />} label="Dashboard" />
        <NavItem to="/accounts" icon={<Wallet />} label="Accounts" />
        <NavItem to="/transactions" icon={<CreditCard />} label="Transactions" />
        <NavItem to="/reports" icon={<BarChart2 />} label="Reports" />
      </nav>

      {/* Account List */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">ACCOUNTS</h2>
        <div className="space-y-1">
          <AccountGroup title="CASH" balance="1,200.00" />
          <AccountGroup title="BANK" balance="15,420.00" />
          <AccountGroup title="SAVINGS" balance="8,800.00" />
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, to }) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive ? 'bg-[#274c67] text-white' : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    );
  }

function AccountGroup({ title, balance }) {
  return (
    <div className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <span className="text-sm font-semibold">${balance}</span>
      </div>
    </div>
  );
}

export default Sidebar;