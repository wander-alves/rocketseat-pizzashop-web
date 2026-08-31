import { api } from "@/lib/axios";

async function signOut() { 
  await api.post('/sign-out');
}

export { signOut }