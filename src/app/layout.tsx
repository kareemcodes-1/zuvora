import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zuvora - More Than Just Clothes.",
  description: "We only sell quality clothing here.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="antialiased">
        {/* TEMPORARY: Remove after debugging */}

          {children}
      </body>
    </html>
  );
}