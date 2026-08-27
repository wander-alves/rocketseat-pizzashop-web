import { api } from "@/lib/axios";

interface RegisterRestaurantBody { 
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

async function registerRestaurant({restaurantName, managerName, email, phone}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone
  })
}

export { registerRestaurant }