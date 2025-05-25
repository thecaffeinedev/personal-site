import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import SocialIcon from '@/components/social-icons'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pb-8 pt-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-start">
            <div className="space-y-4 lg:col-span-3">
              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
                  Hi, I'm Prabhat. 👋
                </h1>
                <div className="mt-3 text-xl font-semibold text-primary-500">
                  Senior Software Engineer
                </div>
                <div className="mt-1 text-lg text-gray-600 dark:text-gray-400">
                  Polyglot Developer • Backend & Infrastructure
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  📍 Hyderabad, India
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-gray-900 transition-colors hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                >
                  About me →
                </Link>
              </div>

              <div className="flex space-x-3 pt-2 sm:space-x-4">
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                <SocialIcon kind="x" href={siteMetadata.X} size={6} />
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center gap-2 rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 sm:px-4 sm:py-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-2 text-sm text-gray-600 dark:text-gray-300">main.go</div>
                </div>

                <div className="p-3 font-mono text-xs sm:p-4 sm:text-sm">
                  <div className="space-y-1">
                    <div className="text-gray-500 dark:text-gray-400">// main.go</div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">package</span>{' '}
                      <span className="text-blue-600 dark:text-blue-400">main</span>
                    </div>
                    <div className="mt-2"></div>
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">func</span>{' '}
                      <span className="text-yellow-600 dark:text-yellow-400">main</span>
                      <span className="text-gray-700 dark:text-gray-300">() {`{`}</span>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div>
                        <span className="text-blue-600 dark:text-blue-400">prabhat</span>{' '}
                        <span className="text-gray-700 dark:text-gray-300">:=</span>{' '}
                        <span className="text-green-600 dark:text-green-400">Developer</span>
                        <span className="text-gray-700 dark:text-gray-300">{`{`}</span>
                      </div>
                      <div className="ml-4 space-y-1">
                        <div>
                          <span className="text-red-600 dark:text-red-400">Role</span>
                          <span className="text-gray-700 dark:text-gray-300">:</span>{' '}
                          <span className="text-green-600 dark:text-green-400">"Senior SWE"</span>
                          <span className="text-gray-700 dark:text-gray-300">,</span>
                        </div>
                        <div>
                          <span className="text-red-600 dark:text-red-400">Interests</span>
                          <span className="text-gray-700 dark:text-gray-300">:</span>{' '}
                          <span className="text-green-600 dark:text-green-400">
                            "Distributed Systems"
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">,</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-700 dark:text-gray-300">{`}`}</span>
                      </div>
                      <div className="mt-2"></div>
                      <div>
                        <span className="text-blue-600 dark:text-blue-400">prabhat</span>
                        <span className="text-gray-700 dark:text-gray-300">.</span>
                        <span className="text-yellow-600 dark:text-yellow-400">Work</span>
                        <span className="text-gray-700 dark:text-gray-300">()</span>
                      </div>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">{`}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent Blog Posts
          </h2>
          <div className="space-y-1">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="group rounded-lg p-4 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <time
                      dateTime={date}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:min-w-[80px]"
                    >
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>

                    <div className="flex-1">
                      <h2 className="text-lg font-semibold leading-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 transition-colors hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                        >
                          {title}
                        </Link>
                      </h2>

                      <div className="mt-1 flex flex-wrap gap-2">
                        {tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {/* Newsletter Section (uncomment if needed) */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
