import { getSiteSettings } from "@/lib/payload";
import { NavbarClient } from "@/components/common/Navbar/_NavbarClient";

export const Navbar = async () => {
  const settings = await getSiteSettings();
  const { github, linkedin } = settings.social || {};

  return <NavbarClient github={github} linkedin={linkedin} />;
};
