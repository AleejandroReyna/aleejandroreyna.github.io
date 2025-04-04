type Props = {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: Props) => {
  return (
    <div className="pt-24 pb-12 px-10 bg-neutral text-neutral-content">
        <h1 className="text-5xl font-bold">{title}</h1>
        {description && <p className="text-2xl mt-2">{description}</p>}
    </div>
  )
}