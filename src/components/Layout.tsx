"use client";

import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop Grid Layout - centered with max-width */}
      <div className="hidden lg:grid lg:grid-cols-[16rem_1fr] lg:max-w-5xl lg:mx-auto lg:w-full">
        {/* Sidebar - sticky within grid */}
        <Sidebar />

        {/* Main Content */}
        <main className="min-h-screen border-l border-border">
          <div className="px-8 py-16">
            {children}
          </div>
          
          {/* Footer inside content area */}
          <footer className="border-t border-border px-8 py-4">
            <p className="text-sm text-muted-foreground m-0">
              © {new Date().getFullYear()} Lukáš Štipčák
            </p>
          </footer>
        </main>
      </div>

      {/* Mobile Content */}
      <main className="flex-1 lg:hidden px-6 py-12">
        {children}
      </main>

      {/* Mobile Footer */}
      <footer className="lg:hidden border-t border-border px-6 py-4">
        <p className="text-sm text-muted-foreground m-0">
          © {new Date().getFullYear()} Lukáš Štipčák
        </p>
      </footer>
    </div>
  );
};
