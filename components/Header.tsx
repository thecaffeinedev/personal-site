import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { TypingPrompt, TypingTerminal } from './TypingLogo'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Home">
          <div className="flex items-center justify-between">
            <TypingTerminal />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => {
            const parts = link.title.split(' ')
            const emoji = parts[0]
            const text = parts.slice(1).join(' ')

            return (
              <Link
                key={link.title}
                href={link.href}
                className="group hidden font-medium text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:text-primary-500 dark:text-gray-100 sm:block"
              >
                <span className="mr-1 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
                  {emoji}
                </span>
                <span className="transition-colors duration-200">{text}</span>
              </Link>
            )
          })}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
