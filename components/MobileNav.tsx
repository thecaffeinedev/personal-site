'use client'

import { Dialog, Transition } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const ModernMobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <Transition show={navShow} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onToggleNav}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="pointer-events-auto fixed inset-4 rounded-2xl bg-white/95 backdrop-blur-xl dark:bg-gray-900/95">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-gray-200/50 p-6 dark:border-gray-700/50">
                    <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Navigation
                    </Dialog.Title>
                    <button
                      className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                      onClick={onToggleNav}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav ref={navRef} className="flex-1 p-6">
                    <div className="space-y-1">
                      {headerNavLinks.map((link) => {
                        const parts = link.title.split(' ')
                        const emoji = parts[0]
                        const text = parts.slice(1).join(' ')

                        return (
                          <Link
                            key={link.title}
                            href={link.href}
                            className="group flex items-center rounded-xl p-4 text-lg font-medium transition-all duration-200 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400"
                            onClick={onToggleNav}
                          >
                            <span className="mr-4 text-2xl transition-transform duration-200 group-hover:scale-110">
                              {emoji}
                            </span>
                            <span className="flex-1 text-gray-900 dark:text-gray-100">{text}</span>
                            <svg
                              className="h-5 w-5 text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        )
                      })}
                    </div>

                    <div className="mt-8 border-t border-gray-200/50 pt-6 dark:border-gray-700/50">
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        Tap anywhere outside to close
                      </p>
                    </div>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModernMobileNav
