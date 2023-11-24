import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs List Page",
  description: "Web Tran Kim Hoang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
