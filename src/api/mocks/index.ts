import { setupWorker } from 'msw/browser';

import { env } from '@/lib/env';

const worker = setupWorker();

async function enableMSW() {
  if(env.MODE !== 'test') {
    return;
  }

  await worker.start();
}

export { enableMSW, worker };