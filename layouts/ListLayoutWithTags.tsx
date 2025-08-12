'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="flex justify-center space-x-8 pt-8">
      {prevPage ? (
        <Link
          href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
          className="text-primary-500 hover:text-primary-600"
        >
          ← Previous
        </Link>
      ) : (
        <span className="text-gray-400">← Previous</span>
      )}

      <span className="text-gray-500">
        {currentPage} of {totalPages}
      </span>

      {nextPage ? (
        <Link
          href={`/${basePath}/page/${currentPage + 1}`}
          className="text-primary-500 hover:text-primary-600"
        >
          Next →
        </Link>
      ) : (
        <span className="text-gray-400">Next →</span>
      )}
    </div>
  )
}

export default function MinimalBlogLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [showTags, setShowTags] = useState(false)

  const tagCounts = posts.reduce((acc: Record<string, number>, post) => {
    post.tags?.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {})

  const sortedTags = Object.entries(tagCounts).sort(([, a], [, b]) => b - a)

  const filteredPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    const matchesSearch = searchContent.toLowerCase().includes(searchValue.toLowerCase())
    const matchesTag = !selectedTag || post.tags?.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue && !selectedTag
      ? initialDisplayPosts
      : filteredPosts

  const postsByYear = displayPosts.reduce(
    (groups: { [key: string]: CoreContent<Blog>[] }, post) => {
      const year = new Date(post.date).getFullYear().toString()
      if (!groups[year]) groups[year] = []
      groups[year].push(post)
      return groups
    },
    {}
  )

  const sortedYears = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{posts.length} articles</p>
      </div>

      {/* Search */}
      <div className="mx-auto max-w-md">
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between border-b pb-2">
        <button
          onClick={() => setShowTags(!showTags)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <span>{showTags ? '▼' : '▶'}</span>
          Topics ({Object.keys(tagCounts).length})
        </button>
        {selectedTag && (
          <button
            onClick={() => setSelectedTag(null)}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Clear filter
          </button>
        )}
      </div>

      {showTags && (
        <div className="pb-4">
          <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:grid-cols-4">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded p-2 text-left transition-colors ${
                selectedTag === null
                  ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              All posts ({posts.length})
            </button>
            {sortedTags.map(([tag, count]) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`rounded p-2 text-left transition-colors ${
                  selectedTag === tag
                    ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tag} ({count})
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-8">
        {!displayPosts.length && <div className="text-center text-gray-500">No posts found.</div>}

        {sortedYears.map((year) => (
          <div key={year}>
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">{year}</h2>
            <div className="space-y-1 border-l-2 border-gray-200 pl-4 dark:border-gray-700">
              {postsByYear[year].map((post) => {
                const { path, date, title, tags } = post
                return (
                  <article
                    key={path}
                    className="group py-2 hover:bg-gray-50/50 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                      <time className="font-mono text-sm text-gray-500 dark:text-gray-400 sm:min-w-[60px]">
                        {new Date(date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: '2-digit',
                        })}
                      </time>

                      <div className="flex-1">
                        <Link
                          href={`/${path}`}
                          className="font-medium text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
                        >
                          {title}
                        </Link>
                      </div>

                      {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                          {tags.length > 2 && (
                            <span className="text-xs text-gray-400">+{tags.length - 2}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && !searchValue && !selectedTag && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
