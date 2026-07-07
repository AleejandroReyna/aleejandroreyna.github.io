import { AnimateIn } from "@/components/ds/AnimateIn"
import { Form } from "../Form"
import { List } from "../List"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const Content = ({ searchParams }: Props) => {
  return (
    <section className="pb-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <AnimateIn delay={0.1} className="mb-12">
          <Form />
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <List searchParams={searchParams} />
        </AnimateIn>
      </div>
    </section>
  )
}
