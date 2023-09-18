import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
    <div style={{ height: "100vh", overflow: 'hidden' }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-4 sidebar" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Sidebar />
        </div>
        <div className="col-8 d-flex align-items-center" style={{ height: "100%" }}>
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
