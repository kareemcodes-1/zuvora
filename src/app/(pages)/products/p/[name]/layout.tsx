import type { Metadata } from "next";

// Next.js expects this shape for generateMetadata's params argument:
type GenerateMetadataParams = {
  params: {
    name: string;
  };
};

export async function generateMetadata({ params }: GenerateMetadataParams): Promise<Metadata> {
  const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));
  return {
    title: `${decodedName} | Zuvora`,
    description: `Discover details about ${decodedName} in our Zuvora collection.`,
  };
}

// Layout only needs children, params not required here
type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
         <>
          {children}
         </>
  );
}
