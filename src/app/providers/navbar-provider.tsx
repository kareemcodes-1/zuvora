// context/navbar-context.tsx
"use client";
import { createContext, useContext, useState } from "react";

type NavbarTheme = "light" | "dark";

const NavbarContext = createContext<{
  theme: NavbarTheme;
  setTheme: (theme: NavbarTheme) => void;
}>({ theme: "dark", setTheme: () => {} });

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<NavbarTheme>("dark");
  return (
    <NavbarContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);