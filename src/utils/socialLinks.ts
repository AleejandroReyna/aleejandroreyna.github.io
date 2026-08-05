import { SiGithub, SiInstagram, SiFacebook, SiTiktok } from '@icons-pack/react-simple-icons';
import { Linkedin, Calendar } from 'lucide-react';
import type { SiteSetting } from '@/payload-types';

/** Acepta tanto un handle suelto como una URL completa pegada en el CMS. */
export const handleOf = (value?: string | null) =>
  value?.trim().replace(/^https?:\/\/[^/]+\//, '').replace(/^@/, '').replace(/\/+$/, '') || '';

export type SocialLink = {
  /** Coincide con la clave de traducción en `footer` y `contactPage`. */
  key: 'github' | 'linkedin' | 'instagram' | 'facebook' | 'tiktok' | 'calendly';
  Icon: typeof SiGithub | typeof Linkedin;
  handle: string;
  /** Identificador tal como se muestra, con el prefijo propio de cada red. */
  display: string;
  url: string;
};

/**
 * Construye los enlaces sociales a partir de Site Settings, ya normalizados.
 * `named` se muestra con el identificador visible; `icons` como botones de sólo icono.
 */
export const getSocialLinks = (social?: SiteSetting['social']) => {
  const build = (
    key: SocialLink['key'],
    Icon: SocialLink['Icon'],
    raw: string | null | undefined,
    display: (h: string) => string,
    url: (h: string) => string,
  ): SocialLink | null => {
    const handle = key === 'linkedin' ? handleOf(raw).replace(/^in\//, '') : handleOf(raw);
    return handle ? { key, Icon, handle, display: display(handle), url: url(handle) } : null;
  };

  const isLink = (link: SocialLink | null): link is SocialLink => link !== null;

  return {
    github: build('github', SiGithub, social?.github, (h) => `@${h}`, (h) => `https://github.com/${h}`),
    calendly: build('calendly', Calendar, social?.calendly, (h) => `/${h}`, (h) => `https://calendly.com/${h}`),
    icons: [
      build('linkedin', Linkedin, social?.linkedin, (h) => `/in/${h}`, (h) => `https://linkedin.com/in/${h}`),
      build('instagram', SiInstagram, social?.instagram, (h) => `@${h}`, (h) => `https://instagram.com/${h}`),
      build('facebook', SiFacebook, social?.facebook, (h) => `/${h}`, (h) => `https://facebook.com/${h}`),
      build('tiktok', SiTiktok, social?.tiktok, (h) => `@${h}`, (h) => `https://tiktok.com/@${h}`),
    ].filter(isLink),
  };
};
