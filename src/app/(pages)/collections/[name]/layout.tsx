import type { Metadata } from "next";
import "../../../globals.css";
import AuthProvider from "../../../providers/provider";
import ToastProvider from "../../../providers/toast-provider";
import NavbarBlack from "../../../components/navbar/navbar-black";
import Footer from "../../../components/footer";
import Testimonials from "../../../components/testimonials";

// Correct type for `generateMetadata` params
type MetadataProps = {
  params: {
    name: string;
  };
};

// ✅ Correct type usage for `generateMetadata`
export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));

  return {
    title: `${decodedName} Collections | Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
  };
}

// ✅ Don't reuse `params` in layout props
type LayoutProps = {
  children: React.ReactNode;
};

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
