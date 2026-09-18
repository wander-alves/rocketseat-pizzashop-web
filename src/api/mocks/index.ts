import { setupWorker } from 'msw/browser';

import { env } from '@/lib/env';
import { signInMock } from '../sign-in-mock';

const worker = setupWorker(
  signInMock,
);

async function enableMSW() {
  if(env.MODE !== 'test') {
    return;
  }

  await worker.start();
}

export { enableMSW, worker };