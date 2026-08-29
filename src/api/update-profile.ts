import { api } from "@/lib/axios";

interface UpdateProfileBody { 
  name: string;
  description: string | null;
}

async function updateProfile({ name, description }: UpdateProfileBody) {
  await api.put('/restaurants', { 
    name, 
    description,
  });
}

export { updateProfile }