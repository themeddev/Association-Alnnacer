import NavSide from './nav-side';

export const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full min-w-[100vh]">
      <NavSide>
        {children}
      </NavSide>
    </div>
  );
};

