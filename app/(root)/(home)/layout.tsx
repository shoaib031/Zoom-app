import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
      <Sidebar/>

        <section className="flex min-h-screen flex-1 flex-col px-16 pb-6 pt-28 max-md:pb-14 sm:px-10">
          <div className="flex w-full h-full items-center justify-center">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
