'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
            <h3 className="text-red-800 font-semibold mb-2">Something went wrong</h3>

            <p className="text-red-600 text-sm mb-4">
                {this.state.error?.message || 'An unexpected error occurred'}
            </p>

            <button
                onClick={() => this.setState({ hasError: false })}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
            >
                Try Again
            </button>
            
        </div>
      );
    }

    return this.props.children;
  }
}