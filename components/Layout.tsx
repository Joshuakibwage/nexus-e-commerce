'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { apolloClient } from '@/lib/apolloClient';
import { store } from '@/store/store';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        E-Commerce Catalog
                    </h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6">
                {children}
            </main>
        </div>
      </Provider>
    </ApolloProvider>
  );
}