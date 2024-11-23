import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="p-10">
            <nav className="mb-4">
                <ul className="flex justify-between text-lg font-bold *:p-2 *:bg-gray-100 *:rounded-lg">
                    <li className="hover:underline">
                        <Link to="/example1">Example 1 (Jest)</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example2">Example 2 (Jest)</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example3">Example 3 (Jest)</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example4">Example 4 (Cypress)</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/example5">Example 5 (Cypress)</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
