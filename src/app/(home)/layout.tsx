
import type { Metadata } from "next";
import "../globals.css";
import AuthProvider from "../providers/provider";
import ToastProvider from "../providers/toast-provider";


export const metadata: Metadata = {
  title: "Zuvora | More Than Just Clothes.",
  description: "Idk man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <AuthProvider>
        <ToastProvider/>

        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
