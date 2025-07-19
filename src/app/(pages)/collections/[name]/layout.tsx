import type { Metadata } from "next";
import "../../../globals.css";
import AuthProvider from "../../../providers/provider";
import ToastProvider from "../../../providers/toast-provider";
import NavbarBlack from "../../../components/navbar/navbar-black";
import Footer from "../../../components/footer";
import Testimonials from "../../../components/testimonials";

// ✅ DO NOT define your own type, use inline typing for Next.js expected shape
export async function generateMetadata(
  { params }: { params: { name: string } }
): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));
  return {
    title: `${decodedName} Collections | Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
  };
}

// ✅ Minimal props type for layout component (no params here)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
