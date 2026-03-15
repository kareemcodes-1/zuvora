import type { Metadata } from "next";
import "../../../globals.css";
import AuthProvider from "../../../providers/provider";
import ToastProvider from "../../../providers/toast-provider";
import Footer from "../../../components/footer";
import Testimonials from "../../../components/testimonials";

type LayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: `Shop All Collection | Zuvora`,
    description: `Discover details about in our Zuvora collection.`,
  };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>

  );
}
