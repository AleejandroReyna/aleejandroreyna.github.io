import { faBriefcase, faUsersLine, faCalendarDays, faFlagCheckered, faBolt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Results = () => {
  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-md bg-white md:max-w-7xl lg:max-w-7xl justify-center flex">
        <div className="stats shadow">

        <div className="stat">
          <div className="stat-figure">
            <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
          </div>
          <div className="stat-title">Experience</div>
          <div className="stat-value">12 Years</div>
          <div className="stat-desc">As a developer</div>
        </div>
          <div className="stat">
            <div className="stat-figure">
              <FontAwesomeIcon icon={faFlagCheckered} size="2xl" />
            </div>
            <div className="stat-title">Finished Projects</div>
            <div className="stat-value">30+</div>
            <div className="stat-desc">Grateful with experience</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <FontAwesomeIcon icon={faUsersLine} size="2xl" />
            </div>
            <div className="stat-title">Satisfied Customers</div>
            <div className="stat-value">10+</div>
            <div className="stat-desc">As a freelancer</div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <FontAwesomeIcon icon={faBolt} size="2xl" />
            </div>
            <div className="stat-title">Used technologies</div>
            <div className="stat-value">20+</div>
            <div className="stat-desc">Solid experience is better</div>
          </div>
        </div>
      </div>
    </section>
  )
}