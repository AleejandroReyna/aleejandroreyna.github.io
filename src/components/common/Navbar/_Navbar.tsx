import Link from "next/link";

export const Navbar = () => {

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <nav>
        <ul>
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