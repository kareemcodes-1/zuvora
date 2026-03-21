import type { Metadata } from "next";
import "../../../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const decodedName = decodeURIComponent(name.replace(/-/g, " "));
  return {
    title: `${decodedName} Collections - Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}