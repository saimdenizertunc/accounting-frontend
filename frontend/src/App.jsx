import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <main className="pt-16 pl-64">
        <div className="p-6">
          {/* Main content will go here */}
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </main>
    </div>
  );
}

export default App;