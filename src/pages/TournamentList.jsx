import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function TournamentList() {
  return (
    <div className="text-lg font-bold">
      <Outlet />

      <div className="bottom-0">
        <NavLink to="/tournaments/1" className="border-r-4 px-4">
          Tournament 1
        </NavLink>
        <NavLink to="/tournaments/2" className=" border-r-4 px-4">
          Tournament 2
        </NavLink>
        <NavLink to="/tournaments/3" className="px-4">
          Tournament 3
        </NavLink>
      </div>
    </div>
  );
}
