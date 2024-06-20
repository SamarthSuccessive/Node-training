import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const serverhandler = setupServer(...handlers);
