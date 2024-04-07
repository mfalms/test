"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {
  linkList: string[];
};
export const Nav = ({ linkList }: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          {linkList.map((link: string) => {
            return (
              <li key={link} style={{ margin: "0 20px" }}>
                <Link
                  className={`${pathname === link ? "active" : ""}`}
                  href={link === "home" ? "/" : "/" + link}
                >
                  {link?.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
