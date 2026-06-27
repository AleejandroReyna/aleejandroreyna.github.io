type Props = {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: Props) => {
  return (
    <div className="pt-40 pb-16 bg-background relative overflow-hidden">
      {/* Background line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-secondary/50 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground uppercase tracking-tight">{title}</h1>
            {description && <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest mt-2">{description}</p>}
          </div>
          <div className="w-16 h-1 bg-[#092e20] shadow-[0_0_10px_#092e20]"></div>
        </div>
      </div>
    </div>
  )
}
