import { Uses, allUses } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import UsesLayout from '@/layouts/UsesLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Uses' })

export default function Page() {
  const uses = allUses.find((p) => p.slug === 'default') as Uses
  const mainContent = coreContent(uses)

  return (
    <>
      <UsesLayout content={mainContent}>
        <MDXLayoutRenderer code={uses.body.code} />
      </UsesLayout>
    </>
  )
}
