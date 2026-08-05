import { useEffect, useState } from 'react';

const TYPE_SPEED_MS = 75;
const DELETE_SPEED_MS = 40;
const PAUSE_MS = 1500;

interface State {
  wordIndex: number;
  subIndex: number;
  deleting: boolean;
}

const INITIAL: State = { wordIndex: 0, subIndex: 0, deleting: false };

// Cada fotograma es un único `setTimeout`: el estado sólo avanza dentro del
// temporizador, nunca de forma síncrona durante el efecto. Un solo objeto de
// estado mantiene los tres valores en el mismo render.
export const useTypewriter = (words: string[]) => {
  const [{ wordIndex, subIndex, deleting }, setState] = useState<State>(INITIAL);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIndex % words.length];

    // Palabra completa: espera y empieza a borrar.
    if (!deleting && subIndex === word.length) {
      const pause = setTimeout(() => setState((s) => ({ ...s, deleting: true })), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    // Palabra borrada: pasa a la siguiente y vuelve a escribir.
    if (deleting && subIndex === 0) {
      const next = setTimeout(
        () => setState((s) => ({
          wordIndex: (s.wordIndex + 1) % words.length,
          subIndex: 0,
          deleting: false,
        })),
        TYPE_SPEED_MS,
      );
      return () => clearTimeout(next);
    }

    const timeout = setTimeout(
      () => setState((s) => ({ ...s, subIndex: s.subIndex + (s.deleting ? -1 : 1) })),
      deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words]);

  return words.length > 0 ? words[wordIndex % words.length].slice(0, subIndex) : '';
};
