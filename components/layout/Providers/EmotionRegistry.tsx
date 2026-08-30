'use client'

import createCache from '@emotion/cache'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface EmotionRegistryProps {
  children: ReactNode
}

export default function EmotionRegistry({
  children,
}: EmotionRegistryProps) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'mui' })
    cache.compat = true

    const prevInsert = cache.insert
    let inserted: string[] = []

    cache.insert = (...args: Parameters<EmotionCache['insert']>) => {
      const [, serialized] = args

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }

      return prevInsert(...args)
    }

    const flush = () => {
      const names = inserted
      inserted = []
      return names
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()

    if (names.length === 0) {
      return null
    }

    let styles = ''

    for (const name of names) {
      const style = cache.inserted[name]

      if (typeof style === 'string') {
        styles += style
      }
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
