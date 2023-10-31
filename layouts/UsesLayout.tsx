import { ReactNode } from 'react'
import type { Uses } from 'contentlayer/generated'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Uses, '_id' | '_raw' | 'body'>
}

export default function UsesLayout({ children, content }: Props) {
  const { avatar } = content
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Uses
          </h1>
        </div>
        {/* <div className="w-fll flex h-screen items-center justify-center">
          {avatar && <Image src={avatar} alt={'setup'} width={500} height={500}  quality={80}></Image>}
        </div> */}
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
