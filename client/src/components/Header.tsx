import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';

const Header = () => {
    const { isLoggedIn } = useAppContext();

    return (
        <div className="bg-white py-4 shadow">
            <div className="container mx-auto flex justify-between">
                <span className="text-2xl text-white font-bold tracking-tight">
                    <Link to="/">
                        <span className="text-yellow-300">B</span>
                        <span className="text-blue-800">Hotel</span>
                    </Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link
                                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded"
                                to="/my-bookings"
                            >
                                My Bookings
                            </Link>
                            <Link
                                to="/my-hotels"
                                className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded"
                            >
                                My Hotels
                            </Link>
                            <SignOutButton />
                        </>
                    ) : (
                        <Link
                            to="/sign-in"
                            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded"
                        >
                            Sign In
                        </Link>
                    )}
                </span>
            </div>
        </div>
    );
};

export default Header;
