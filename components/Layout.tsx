'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 w-full">
        <header className="bg-gray-900 shadow-sm py-4">
          <div className="max-w-[90%] mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl text-white font-semibold">
                Trovio
              </h1>
            </Link>

            <div className="space-x-3 ">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/accordion" className="hover:text-blue-600">Accordion</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
            
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                0
              </span>
            </Link>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>

        <Footer />
      </div>
    </Provider>
  );
}