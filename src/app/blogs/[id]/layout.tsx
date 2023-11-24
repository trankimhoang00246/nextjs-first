import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Detail Page",
  description: "Web Tran Kim Hoang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
