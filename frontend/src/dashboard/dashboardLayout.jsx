import React from "react";
import { NavSide } from "./nav-side";

export const DashboardLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <NavSide />
      <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
        <main style={{ maxWidth: "calc(100vw - 15rem)", padding: "1rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
};
