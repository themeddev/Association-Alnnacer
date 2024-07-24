import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// import components
import Home from './pages/home';
import Test from './test';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import Activities from './pages/activities';
import ActivityDetails from './pages/activity-details';
import NotFound from './components/notFound';

// start test
import { DashboardLayout } from './dashboard/dashboardLayout'
import { Dashboard } from './dashboard/dashboard'
import ManageActivities from './dashboard/activities'
import Login from './dashboard/login';
import PrivateRoute from './components/PrivateRoute ';

// end test

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith('/dashboard') || location.pathname === '/notfound' || location.pathname === '/login';

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/activities/:id' element={<ActivityDetails />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/dashboard/*' element={
          <PrivateRoute>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/activities" element={<ManageActivities />} />
              </Routes>
            </DashboardLayout>
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
