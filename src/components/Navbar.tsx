'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Roadmaps', href: '/roadmaps' },
  { name: 'Practice', href: '/practice' },
  { name: 'Resume Builder', href: '/resume' },
  { name: 'Dashboard', href: '/dashboard' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-heading text-2xl font-bold text-brand-primary">
                Applically
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-brand-primary font-semibold'
                    : 'text-brand-dark hover:text-brand-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/auth/login"
              className="text-sm font-medium leading-6 text-brand-dark hover:text-brand-primary transition-colors duration-200"
            >
              Log in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50">
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="font-heading text-2xl font-bold text-brand-primary">
                      Applically
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Mobile menu items */}
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 ${
                            isActive(item.href)
                              ? 'text-brand-primary bg-brand-accent/20'
                              : 'text-brand-dark hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link
                        href="/auth/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-brand-dark hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}