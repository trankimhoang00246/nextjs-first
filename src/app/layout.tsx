'use client'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/app.header';
import Footer from '@/components/app.footer';
import { Container } from 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container>{children}</Container>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
