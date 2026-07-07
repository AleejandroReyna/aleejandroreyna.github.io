import { getPayload } from "payload"
import config from "@payload-config"
import { AnimateIn } from "@/components/ds/AnimateIn"

export const Testimonials = async () => {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "testimonials",
    where: {
      approved: { equals: true },
    },
    limit: 100,
  })

  // Payload/Mongo has no random sort — shuffle the approved pool and take 3.
  const testimonials = [...result.docs].sort(() => Math.random() - 0.5).slice(0, 3)

  if (testimonials.length === 0) return null

  // With fewer than 3 items, cap the grid width and center it so cards keep
  // their intended proportions instead of stretching across the row.
  const gridLayout = {
    1: "md:grid-cols-1 md:max-w-md md:mx-auto",
    2: "md:grid-cols-2 md:max-w-4xl md:mx-auto",
    3: "md:grid-cols-3",
  }[Math.min(testimonials.length, 3) as 1 | 2 | 3]

  return (
    <section className="py-28 relative overflow-hidden border-t border-[#9be8b8]/8" id="testimonials">
      {/* Radial glow, top-center — mirrors the design's testimonials backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 400px at 50% 0%, rgba(37,84,58,0.18), transparent 70%)' }}
      ></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Heading */}
        <AnimateIn>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#46d386] mb-4">
            In Their Words
          </div>
          <h2 className="font-serif font-medium text-5xl md:text-[54px] text-[#f2f4f0] mb-14">
            What clients say
          </h2>
        </AnimateIn>

        {/* Cards — 1px emerald gaps act as grid lines, like the design */}
        <AnimateIn delay={0.15}>
          <div className={`grid grid-cols-1 ${gridLayout} gap-px bg-[#9be8b8]/10 border border-[#9be8b8]/10`}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#0c100d]/90 p-9 md:p-11 flex flex-col">
                <div className="font-serif font-medium text-6xl leading-[0.5] text-[#9be8b8]/25 mb-6">&ldquo;</div>
                <p className="font-serif italic text-[19px] leading-[1.6] text-[#e8ede9] mb-8">
                  {testimonial.quote}
                </p>
                <div className="mt-auto border-t border-[#9be8b8]/12 pt-5">
                  <div className="font-heading font-medium text-sm text-[#f2f4f0]">
                    {testimonial.clientName}
                  </div>
                  {(testimonial.role || testimonial.company) && (
                    <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#dfe5e0]/45 mt-1.5">
                      {[testimonial.role, testimonial.company].filter(Boolean).join(" — ")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
