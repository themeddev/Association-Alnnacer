import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
    const token = Cookies.get('authToken'); // Retrieve the token from cookies

    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;