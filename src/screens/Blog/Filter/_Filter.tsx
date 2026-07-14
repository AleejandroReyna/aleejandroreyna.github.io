'use client'

import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

interface Category {
    id: string;
    name: string;
    slug: string;
}

const pillBase = "font-mono text-[11px] tracking-[0.14em] uppercase px-4.5 py-2.5 rounded-sm cursor-pointer transition-colors duration-300"

export const Filter = () => {
  const t = useTranslations('blog')
  const locale = useLocale()
  const [categories, setCategories] = useState<Category[]>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const fetchCategories = useCallback(async () => {
    try {
        const response = await fetch(`/api/categories?limit=100&locale=${locale}`)
        const data = await response.json()
        setCategories(data.docs)
    } catch (error) {
        console.error('Error fetching categories', error)
    }
  }, [locale])

  useEffect(() => {
      fetchCategories()
  }, [fetchCategories])

  const currentParams = new URLSearchParams(Array.from(searchParams.entries()))
  const currentCategoryParams = currentParams.get('category')
  const items = currentCategoryParams ? currentCategoryParams.split(',') : []

  const navigate = (newItems: string[]) => {
    if (newItems.length > 0) {
        currentParams.set('category', newItems.join(','))
    } else {
        currentParams.delete('category')
    }
    // reset page to 1 when changing filters
    currentParams.delete('page')
    router.push(`${pathname}?${currentParams.toString()}`)
  }

  const toggleItem = (slug: string) => {
    navigate(items.includes(slug) ? items.filter(i => i !== slug) : [...items, slug])
  }

  if (categories.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2.5">
      <button
        onClick={() => navigate([])}
        className={`${pillBase} ${items.length === 0
          ? 'bg-[#46d386] text-[#0a0d0b] font-medium'
          : 'text-[#dfe5e0]/55 border border-[#dfe5e0]/15 hover:border-[#9be8b8]/40 hover:text-[#9be8b8]'}`}
      >
        {t('all')}
      </button>
      {categories.map((category) => {
        const isActive = items.includes(category.slug)
        return (
          <button
            key={category.id}
            onClick={() => toggleItem(category.slug)}
            className={`${pillBase} ${isActive
              ? 'bg-[#46d386] text-[#0a0d0b] font-medium'
              : 'text-[#dfe5e0]/55 border border-[#dfe5e0]/15 hover:border-[#9be8b8]/40 hover:text-[#9be8b8]'}`}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
