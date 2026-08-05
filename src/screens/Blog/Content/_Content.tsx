import { getPayload } from "payload"
import config from "@payload-config"
import { AnimateIn } from "@/components/ds/AnimateIn"
import { getLocale } from "@/lib/locale"
import { Filter } from "../Filter"
import { List } from "../List"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const Content = async ({ searchParams }: Props) => {
  const locale = await getLocale()
  const payload = await getPayload({ config })
  const { docs: categories } = await payload.find({ collection: "categories", limit: 100, locale })

  return (
    <section className="pb-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimateIn delay={0.1} className="mb-4">
          <Filter categories={categories} />
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <List searchParams={searchParams} />
        </AnimateIn>
      </div>
    </section>
  )
}
