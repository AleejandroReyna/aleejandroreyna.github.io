import { Form } from "../Form"
import { List } from "../List"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const Content = ({ searchParams }: Props) => {
  return (
    <section className="pb-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          <div className="lg:col-span-1">
            <Form />
          </div>
          <div className="lg:col-span-3">
            <List searchParams={searchParams} />
          </div>
        </div>
      </div>
    </section>
  )
}
