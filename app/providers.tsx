'use client';

import { ApolloProvider } from '@apollo/client/react';
import client from '@/lib/apolloClient';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                {children}
            </Provider>
        </ApolloProvider>
    );
}