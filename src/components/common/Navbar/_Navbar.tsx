import Link from "next/link";

export const Navbar = () => {

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link className="text-xl font-semibold" href={'/'}>Alejandro Reyna</Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}