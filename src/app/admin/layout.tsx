'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DashboardIcon,
  GiftIcon,
  MailIcon,
  ImageIcon,
  SettingsIcon,
  MenuIcon,
  XIcon,
  LogoutIcon
} from '@/components/icons';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: DashboardIcon },
    { name: 'Offers', href: '/admin/offers', icon: GiftIcon },
    { name: 'Newsletter', href: '/admin/newsletter', icon: MailIcon },
    { name: 'AI Content', href: '/admin/content', icon: ImageIcon },
    { name: 'Settings', href: '/admin/settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-24 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-dark-800 rounded-lg text-white"
        >
          {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-20 left-0 h-[calc(100vh-80px)] w-64 bg-dark-900 border-r border-dark-800 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">Admin Panel</h2>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-dark-300 hover:bg-dark-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-dark-400 hover:text-white rounded-xl hover:bg-dark-800 transition-all">
            <LogoutIcon className="w-5 h-5" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 p-6 lg:p-8">
        {children}
      </main>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
