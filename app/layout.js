import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { Suspense } from 'react'
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahil Chandwani",
  description: "I am sahil chandwani",
};

export default function RootLayout({ children }) {
  return (
 <Suspense fallback={<div>Loading...</div>}>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
    </Suspense>
  );
}
