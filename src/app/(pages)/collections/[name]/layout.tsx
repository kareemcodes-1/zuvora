import type { Metadata } from "next";
import "../../../globals.css";
import AuthProvider from "../../../providers/provider";
import ToastProvider from "../../../providers/toast-provider";
import NavbarBlack from "../../../components/navbar/navbar-black";
import Footer from "../../../components/footer";
import Testimonials from "../../../components/testimonials";

type LayoutProps = {
  children: React.ReactNode;
  params: {name: string};
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));

  return {
    title: `${decodedName} Collections | Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
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
