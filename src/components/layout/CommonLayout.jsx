import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <div className="h-screen w-full md:w-full grid grid-rows-12 grid-cols-12 text-xs">
      <header className="col-span-12 w-full h-[52px] border-b-[1px] border-slate-1000 px-4 flex justify-between items-center bg-grey-200 gap-2">
        <span className="text-lg font-bold">Header Area</span>(Layouts - Header
        and Sidebar - Implement in auth - module using module federation)
      </header>
      <div className="flex h-[calc(100vh-52px)] w-screen">
        <Sidebar />
        <main className="flex-1 max-w-full max-h-screen overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CommonLayout;
