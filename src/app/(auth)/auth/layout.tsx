import type { Metadata } from "next";
import "../../globals.css";
import AuthProvider from "../../providers/provider";
import ToastProvider from "../../providers/toast-provider";
import Navbar from "../../components/navbar/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Authenication | Zuvora`,
    description: `Sign in to Zuvora`,
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <ToastProvider />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
