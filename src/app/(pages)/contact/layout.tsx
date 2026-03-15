import type { Metadata } from "next";
import AuthProvider from "../../providers/provider";
import ToastProvider from "../../providers/toast-provider";
import { NavbarProvider } from "@/app/providers/navbar-provider";

type LayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Contact | Zuvora`,
    description: `Discover details about in our Zuvora collection.`,
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <NavbarProvider>
        {children}
      </NavbarProvider>
    </>
  );
}
