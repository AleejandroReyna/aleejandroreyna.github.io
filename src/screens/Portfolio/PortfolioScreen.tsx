import { PageTitle } from "@/components/ds/PageTitle"
import { Content } from "./Content"

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export const PortfolioScreen = ({ searchParams }: Props) => {
  return (
    <>
      <PageTitle title="Portfolio" description="Some of my projects" />
      <Content searchParams={searchParams} />
    </>
  )
}
