import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#1A1A1A] text-[#FAF7F1] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-[#222222] border border-[#E3C27A]/30 shadow-2xl space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E3C27A]/20 text-[#E3C27A] flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#FAF7F1]">
              Application View Encountered an Issue
            </h2>
            <p className="text-xs text-[#FAF7F1]/70 leading-relaxed">
              We encountered an unexpected display condition. You can reload the view or return to the main showcase.
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-3 rounded-full bg-gold-gradient text-[#1A1A1A] text-xs font-bold inline-flex items-center gap-2 shadow-lg hover:brightness-105 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
