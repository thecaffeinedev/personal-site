import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Bookshelf' })

export default function Bookshelf() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Bookshelf 📚
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Books I have liked enough to recommend to friends or colleagues.
          </p>
        </div>

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            📘 Non Fiction
          </h3>
          <li>Bad Blood - John Carreyrou</li>
          <li>Atomic Habits - James Clear</li>
          <li>Why We Sleep - Matthew Walker</li>
          <li> What I Talk About When I Talk About Running - Haruki Murakami</li>
          <li>Man’s Search for Meaning - Viktor Frankl</li>
          <li>The Monk who sold his ferrari - Robin Sharmat</li>
          <li>Deep Work - Cal Newport</li>
          <li>Into Thin Air - Jon Krukauer's</li>
          <li>The Virtue of Selfishness - Ayn Rand</li>
          <li>The Innovators - Walter Isaacson</li>
          <li>The Quest - Daniel Yergin</li>
          <li>The Road Less Traveled - Scott Peck</li>
          <li>7 Habits of Highly Effective People - Stephen Covey</li>

          <h3 className="md:leading-16 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl">
            📖 Tech Books
          </h3>
          <br></br>

          <li>Clean Code - Robert C. Martin</li>
          <li>Cracking The Coding Interview - Gayle Laakmann McDowell</li>
          <li>Clean Architecture - Robert C. Martin</li>
          <li>Database Design Solutions - Rod Stephens</li>
          <li>The Effective Engineer - Edmond Lau</li>
        </div>
      </div>
    </>
  )
}
