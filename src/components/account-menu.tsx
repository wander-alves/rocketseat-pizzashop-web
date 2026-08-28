import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useQuery } from '@tanstack/react-query'

import { Button } from "@/components/ui/button"
import { Building, ChevronDown, LogOut } from "lucide-react"
import { getProfile } from "@/api/get-profile"
import { getManagedRestaurant } from "@/api/get-managed-restaurant"

function AccountMenu() { 
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  });

  const { data: managedRestaurant }  = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
  });


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          {managedRestaurant?.name}
          <ChevronDown className="w-4 h-4"/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex flex-col">
            <span>{profile?.name}</span>
            <span className="text-xs font-normal text-muted-foreground">{profile?.email}</span>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Building className="w-4 h-4 mr-2"/>
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-rose-500 dark:text-rose-400">
          <LogOut className="w-4 h-4 mr-2"/>
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { AccountMenu }