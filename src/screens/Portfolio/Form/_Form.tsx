'use client'

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

interface Tech {
    id: string;
    name: string;
}

interface Props {
  techs: Tech[];
}

const pillBase = "font-mono text-[11px] tracking-[0.14em] uppercase px-4.5 py-2.5 rounded-sm cursor-pointer transition-colors duration-300"

// Las tecnologías llegan ya resueltas desde el servidor: este componente sólo
// traduce clics en cambios de query string.
export const Form = ({ techs }: Props) => {
  const t = useTranslations('portfolioArchive')
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentParams = new URLSearchParams(Array.from(searchParams.entries()))
  const currentTechParams = currentParams.get('tech')
  const items = currentTechParams ? currentTechParams.split(',') : []

  const navigate = (newItems: string[]) => {
    if (newItems.length > 0) {
        currentParams.set('tech', newItems.join(','))
    } else {
        currentParams.delete('tech')
    }
    // reset page to 1 when changing filters
    currentParams.delete('page')
    router.push(`${pathname}?${currentParams.toString()}`)
  }

  const toggleItem = (item: string) => {
    navigate(items.includes(item) ? items.filter(i => i !== item) : [...items, item])
  }

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
      {techs.map((tech) => {
        const isActive = items.includes(tech.name)
        return (
          <button
            key={tech.id}
            onClick={() => toggleItem(tech.name)}
            className={`${pillBase} ${isActive
              ? 'bg-[#46d386] text-[#0a0d0b] font-medium'
              : 'text-[#dfe5e0]/55 border border-[#dfe5e0]/15 hover:border-[#9be8b8]/40 hover:text-[#9be8b8]'}`}
          >
            {tech.name}
          </button>
        )
      })}
    </div>
  )
}
