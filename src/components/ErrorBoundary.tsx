import { Component, type ErrorInfo, type ReactNode } from "react";

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio error boundary", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-mist px-6 text-navy dark:bg-navy dark:text-white">
          <div className="max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-executive dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Portfolio</p>
            <h1 className="mt-3 font-heading text-3xl font-bold">Something needs attention.</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Please refresh the page. If the issue continues, use the contact page to share details.
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
