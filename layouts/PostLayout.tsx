import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="mx-auto max-w-3xl">
          <header className="pb-8 pt-6">
            <div className="space-y-6 text-center">
              <div>
                <time
                  dateTime={date}
                  className="text-base font-medium text-gray-500 dark:text-gray-400"
                >
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </div>

              <div>
                <PageTitle>{title}</PageTitle>
              </div>

              {tags && (
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}

              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                {authorDetails.map((author) => (
                  <div key={author.name} className="flex items-center justify-center space-x-4">
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={56}
                        height={56}
                        alt="avatar"
                        className="h-14 w-14 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {author.name}
                      </div>
                      {author.X && (
                        <Link
                          href={author.X}
                          className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          {author.X.replace('https://X.com/', '@')}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="prose max-w-none pb-8 pt-10 text-gray-900 dark:prose-invert dark:text-gray-100">
            {children}
          </div>

          <footer className="mt-12 space-y-8 border-t border-gray-200 pt-8 dark:border-gray-700">
            <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href={discussUrl(path)}
                rel="nofollow"
                className="hover:text-primary-500 dark:hover:text-primary-400"
              >
                Discuss on X
              </Link>
              <span>•</span>
              <Link
                href={editUrl(filePath)}
                className="hover:text-primary-500 dark:hover:text-primary-400"
              >
                Edit on GitHub
              </Link>
            </div>

            {(prev || next) && (
              <nav className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                {prev && prev.path && (
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Previous
                    </p>
                    <Link
                      href={`/${prev.path}`}
                      className="mt-1 block text-lg font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      ← {prev.title}
                    </Link>
                  </div>
                )}
                {next && next.path && (
                  <div className="flex-1 text-right">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Next
                    </p>
                    <Link
                      href={`/${next.path}`}
                      className="mt-1 block text-lg font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} →
                    </Link>
                  </div>
                )}
              </nav>
            )}

            {siteMetadata.comments && (
              <div id="comment" className="border-t border-gray-200 pt-8 dark:border-gray-700">
                <Comments slug={slug} />
              </div>
            )}

            <div className="text-center">
              <Link
                href={`/${basePath}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                ← Back to blog
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}