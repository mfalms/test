import { Nav } from "@/components/nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Nav linkList={["user", "user/my"]} />
      {children}
    </section>
  );
};

export default layout;
