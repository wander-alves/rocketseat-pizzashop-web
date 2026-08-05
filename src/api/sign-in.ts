import { api } from '@/lib/axios';

interface SignInBody {
  email: string;
}

async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email });
}

export { signIn, type SignInBody }