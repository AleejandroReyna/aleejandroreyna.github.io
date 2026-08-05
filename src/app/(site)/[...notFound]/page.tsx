import { notFound } from "next/navigation";

/**
 * El layout raíz vive dentro del grupo `(site)`, así que una URL sin ruta
 * definida no llegaría al `not-found.tsx` de este grupo. Este catch-all la
 * atrapa y dispara `notFound()` para que el 404 se renderice con el navbar,
 * el footer y el fondo del sitio. Las rutas literales (`/admin`, `/api`, …)
 * tienen prioridad sobre él.
 */
export default function CatchAllNotFound(): never {
  notFound();
}
