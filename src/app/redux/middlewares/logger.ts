import { createLogger } from 'redux-logger';

export const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
  level: 'log',
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
  predicate: () => true,
});
