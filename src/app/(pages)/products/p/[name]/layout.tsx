import type { Metadata } from "next";
import "../../../../globals.css";
import AuthProvider from "../../../../providers/provider";
import ToastProvider from "../../../../providers/toast-provider";
import NavbarBlack from "../../../../components/navbar/navbar-black";
import Footer from "../../../../components/footer";
import Testimonials from "../../../../components/testimonials";

// ✅ Type for generateMetadata only
type MetadataProps = {
  params: {
    name: string;
  };
};

// ✅ Use correct type just for generateMetadata
export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));

  return {
    title: `${decodedName} | Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
  };
}

// ✅ Separate layout props (without params unless needed)
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
