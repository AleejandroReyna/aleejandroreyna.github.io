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
    <aside className="sticky top-24 bg-base-100 p-4 rounded-lg shadow-sm">
      <p className="mb-4 font-bold text-lg">Filters</p>

      <p className="mb-2 font-semibold">Technologies:</p>
      {techs.length === 0 ? (
          <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <form action="#">
            {techs.map((tech) => (
                <fieldset className="mb-2" key={tech.id}>
                    <label htmlFor={`${formId}-${tech.name}`} className="flex items-center gap-2 cursor-pointer">
                        <input
                            id={`${formId}-${tech.name}`}
                            type="checkbox"
                            checked={checkIfItemChecked(tech.name)}
                            onChange={() => toggleItem(tech.name)}
                            className="checkbox checkbox-sm checkbox-neutral"
                        />
                        <span className="label-text">{tech.name}</span>
                    </label>
                </fieldset>
            ))}
        </form>
      )}
    </aside>
  )
}
