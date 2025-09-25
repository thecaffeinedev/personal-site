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
  `https://x.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

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
          <header className="pb-12 pt-8">
            <div className="space-y-6 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>

              <div className="flex items-center justify-center gap-3 text-base text-gray-600 dark:text-gray-300">
                <time dateTime={date} className="font-medium">
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
                <span className="text-gray-400">•</span>
                <span className="font-medium">{content.readingTime.text}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                <div className="text-gray-500 dark:text-gray-400">
                  By{' '}
                  {authorDetails[0]?.linkedin ? (
                    <Link
                      href={authorDetails[0].linkedin}
                      className="font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      Prabhat
                    </Link>
                  ) : (
                    <span className="font-medium">Prabhat</span>
                  )}
                </div>

                {tags && tags.length > 0 && (
                  <>
                    <span className="text-gray-400">•</span>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800"></div>
            </div>
          </header>

          <div className="prose max-w-none pb-8 pt-0 text-gray-900 dark:prose-invert dark:text-gray-100">
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
