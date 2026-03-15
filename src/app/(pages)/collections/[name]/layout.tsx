import type { Metadata } from "next";
import "../../../globals.css";
import AuthProvider from "../../../providers/provider";
import ToastProvider from "../../../providers/toast-provider";
import Footer from "../../../components/footer";
import Testimonials from "../../../components/testimonials";

export async function generateMetadata(
  { params }: { params: { name: string } }
): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));
  return {
    title: `${decodedName} Collections - Zuvora`,
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
         <>
          {children}
        </>
  );
}
