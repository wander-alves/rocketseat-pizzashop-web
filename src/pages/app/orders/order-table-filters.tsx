import { Search, X } from "lucide-react";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function OrderTableFilters (){
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>

      <Input className="h-8 w-auto" placeholder="Id do pedido"/>
      <Input className="h-8 w-[320px]" placeholder="Nome"/>

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4"/>
        Fitrar resultados
      </Button>
      <Button variant="outline" size="xs" type="button">
        <X className="mr-2 h-4 w-4"/>
        Remover filtros
      </Button>
    </form>
  )
}

export { OrderTableFilters }