'use client'

import { useState, useEffect, useId, useCallback } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

interface Tech {
    id: string;
    name: string;
}

export const Form = () => {
  const [techs, setTechs] = useState<Tech[]>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const formId = useId()

  const fetchTechs = useCallback(async () => {
    try {
        const response = await fetch('/api/technologies?limit=100')
        const data = await response.json()
        setTechs(data.docs)
    } catch (error) {
        console.error('Error fetching technologies', error)
    }
  }, [])

  useEffect(() => {
      fetchTechs()
  }, [fetchTechs])

  const currentParams = new URLSearchParams(Array.from(searchParams.entries()))
  const currentTechParams = currentParams.get('tech')
  const items = currentTechParams ? currentTechParams.split(',') : []

  const toggleItem = (item: string) => {
    let newItems: string[]
    if (items.includes(item)) {
        newItems = items.filter(i => i !== item)
    } else {
        newItems = [...items, item]
    }

    if (newItems.length > 0) {
        currentParams.set('tech', newItems.join(','))
    } else {
        currentParams.delete('tech')
    }

    // reset page to 1 when changing filters
    currentParams.delete('page')

    router.push(`${pathname}?${currentParams.toString()}`)
  }

  const checkIfItemChecked = (item: string) => {
    return items.includes(item)
  }
 
  return (
    <aside className="sticky top-32 bg-secondary/15 border border-secondary p-6 rounded-none relative group hover:border-[#092e20] transition-colors duration-300">
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#092e20] opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <h3 className="mb-6 font-heading font-bold text-xs uppercase tracking-[0.2em] text-foreground flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#092e20]"></span> System Filters
      </h3>

      <p className="mb-4 font-bold text-[10px] uppercase tracking-widest text-neutral-500">Technologies</p>
      {techs.length === 0 ? (
          <div className="flex justify-center py-4">
            <span className="loading loading-spinner loading-sm text-[#092e20]"></span>
          </div>
      ) : (
        <form action="#" className="space-y-3">
            {techs.map((tech) => (
                <fieldset key={tech.id} className="flex items-center">
                    <label htmlFor={`${formId}-${tech.name}`} className="flex items-center gap-3 cursor-pointer select-none group/item">
                        <input
                            id={`${formId}-${tech.name}`}
                            type="checkbox"
                            checked={checkIfItemChecked(tech.name)}
                            onChange={() => toggleItem(tech.name)}
                            className="w-4 h-4 border border-secondary bg-background rounded-none checked:bg-[#092e20] checked:border-[#092e20] focus:ring-0 text-white cursor-pointer accent-[#092e20]"
                        />
                        <span className={`text-xs font-medium uppercase tracking-wider transition-colors group-hover/item:text-white ${checkIfItemChecked(tech.name) ? 'text-white' : 'text-neutral-400'}`}>
                          {tech.name}
                        </span>
                    </label>
                </fieldset>
            ))}
        </form>
      )}
    </aside>
  )
}
