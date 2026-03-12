import { Form } from "../Form"
import { List } from "../List"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const Content = ({ searchParams }: Props) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-md md:max-w-7xl lg:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Form />
          </div>
          <div className="col-span-2">
            <List searchParams={searchParams} />
          </div>
        </div>
      </div>
    </section>
  )
}
