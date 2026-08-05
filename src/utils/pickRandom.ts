/**
 * Toma `count` elementos al azar con Fisher-Yates, el único barajado con
 * distribución uniforme: cada elemento tiene la misma probabilidad de acabar
 * en cualquier posición.
 *
 * El atajo habitual, `sort(() => Math.random() - 0.5)`, no sirve: `Array.sort`
 * asume un comparador consistente y uno aleatorio deja a los elementos cerca
 * de su posición original, así que los primeros de la lista salen mucho más
 * seguido que los últimos.
 *
 * Pensado para Server Components, donde la aleatoriedad se resuelve por
 * petición y nunca cruza al cliente. No lo uses durante el render de un
 * componente de cliente: ahí un valor distinto en cada render sí es un bug.
 */
export const pickRandom = <T>(items: readonly T[], count: number): T[] => {
  const pool = [...items]
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}
