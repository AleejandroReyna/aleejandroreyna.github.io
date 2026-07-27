import { useEffect, useState } from 'react';

const TYPE_SPEED_MS = 75;
const DELETE_SPEED_MS = 40;
const PAUSE_MS = 1500;

export const useTypewriter = (words: string[]) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIndex % words.length];

    if (!deleting && subIndex === word.length) {
      const pause = setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? DELETE_SPEED_MS : TYPE_SPEED_MS);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words]);

  return words.length > 0 ? words[wordIndex % words.length].slice(0, subIndex) : '';
};
