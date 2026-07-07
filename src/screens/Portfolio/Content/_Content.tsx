import { Form } from "../Form"
import { List } from "../List"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const Content = ({ searchParams }: Props) => {
  return (
    <section className="pb-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-12">
          <Form />
        </div>
        <List searchParams={searchParams} />
      </div>
    </section>
  )
}
