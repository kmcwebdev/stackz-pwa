export const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current /* + other conditions */) {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
