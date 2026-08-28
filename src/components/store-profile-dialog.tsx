import { useQuery } from "@tanstack/react-query";
import { useForm  } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { getManagedRestaurant } from "@/api/get-managed-restaurant";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

function StoreProfileDialog(){
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  });

  const { register } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    }
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja </DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visiveis ao seu cliente.
        </DialogDescription>
      </DialogHeader>
  
      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Nome
            </Label>
            <Textarea className="col-span-3" id="description" {...register('description')} />
          </div>
        </div>
      </form>
  
      <DialogFooter>
        <Button variant="ghost" type="button">
          Cancelar
        </Button>
        <Button variant="success" type="submit">
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}

export { StoreProfileDialog }