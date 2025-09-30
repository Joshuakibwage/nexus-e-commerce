'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux';
import apolloClient from '@/lib/apolloClient';
import { store } from '@/store/store';
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <div className="min-h-screen bg-gray-50 w-full">
            <header className="bg-gray-900 shadow-sm py-4">
                <div className="max-w-[90%] mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/">
                      <h1 className="text-xl text-white font-semibold">
                          Trovio
                      </h1>
                    </Link>


                    <Link href="/cart" className="relative">
                      <ShoppingCart 
                        className="w-6 h-6 text-white" 
                      />
                      <span className="absolute -top-3 -right-1 bg-blue-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
                        
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
    </ApolloProvider>
  );
}