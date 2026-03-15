
import { NavbarProvider } from "@/app/providers/navbar-provider";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Zuvora - About",
  description: "Help bro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
        <NavbarProvider>
           {children}
        </NavbarProvider>
        </>
  );
}
