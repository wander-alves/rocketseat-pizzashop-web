import axios from 'axios';

import { env } from "@/lib/env";


const api = axios.create({
  baseURL: env.VITE_API_URL,
});

export { api };