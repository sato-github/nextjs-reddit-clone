import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
