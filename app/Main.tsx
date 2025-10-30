import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="pb-16 pt-8 md:pb-20 md:pt-12">
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
                Hi, I'm Prabhat. 👋
              </h1>

              <p className="text-xl font-semibold text-primary-500 dark:text-primary-400">
                Lead Software Engineer
              </p>
            </div>

            {/* Tagline / Hook */}
            <div className="mx-auto max-w-lg space-y-2">
              <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Building scalable backend systems and ML infrastructure across the stack. Passionate
                about distributed systems and solving real problems.
              </p>
              {/*<p className="text-sm text-gray-500 dark:text-gray-500">
                📍 Hyderabad, India • 💼 Backend & Infrastructure Engineer
              </p>*/}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-primary-700 hover:shadow-lg active:scale-95 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                About Me
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-900 transition-all duration-200 hover:border-primary-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-100 dark:hover:border-primary-500 dark:hover:bg-gray-800"
              >
                Read Blog
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="x" href={siteMetadata.X} size={6} />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="pt-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent Articles
          </h2>

          <div className="space-y-3">
            {!posts.length && <div className="text-center text-gray-500">No posts found.</div>}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="group rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-primary-500 hover:bg-gray-50 hover:shadow-md dark:border-gray-700 dark:hover:bg-gray-800/50"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>

                      <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {summary}
                      </p>

                      {tags && tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <time className="text-sm text-gray-500 dark:text-gray-400 sm:min-w-fit">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </article>
              )
            })}
          </div>

          {posts.length > MAX_DISPLAY && (
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                View all articles
                <span className="ml-2">→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
