import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "CardShop",
  description: "Made with next",
  icon: '/icon.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}


