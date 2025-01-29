
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Icons } from '../../Icons';



export const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (!confirm) return;

    try {
      await logout();
    } catch {
      console.error("Failed to log out");
    }
  };

  return (
    <header className="p-5 border-b border-gray-700">
      <Icons/>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Star Wars Logo Center" className="w-[15%] h-auto mb-3 ml-43p" />


        <div className="flex gap-6 absolute top-0 right-0 m-2 text-[18px] uppercase text-gray-400">
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link 
                to="/login"
                className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <nav className="flex font-exo-2 justify-center border-t border-b border-gray-700 gap-16 mt-4">
        <Link
          to="/"
          className="text-gray-400 uppercase text-base pt-2 pb-2 hover:border-b-2 hover:border-blue-500 transition-all"
        >
          Home
        </Link>

        <Link
          to="/starship"
          className="text-gray-400 uppercase text-base pt-2 pb-2 hover:border-b-2 hover:border-blue-500 transition-all"
        >
          Starships
        </Link>
      </nav>
    </header>
  );
};
