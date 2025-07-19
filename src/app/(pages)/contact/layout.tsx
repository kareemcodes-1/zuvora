import type { Metadata } from "next";
import "../../globals.css";
import AuthProvider from "../../providers/provider";
import ToastProvider from "../../providers/toast-provider";
import NavbarBlack from "../../components/navbar/navbar-black";
import Footer from "../../components/footer";
import Testimonials from "../../components/testimonials";

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
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <ToastProvider />
          <NavbarBlack />
          {children}
          <Testimonials />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
