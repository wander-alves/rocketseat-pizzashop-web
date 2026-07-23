import { Search, ArrowRight, X } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { OrderDetails } from "./order-details";

function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3"/>
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono font-medium text-xs">
        949asd12312daswda123fg
      </TableCell>
      <TableCell>há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"/>
          <span className="font-medium text-muted-foreground">
            Pendente
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium">
        Jane Doe
      </TableCell>
      <TableCell className="font-medium">
        R$ 109,90
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-2"/>
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2"/>
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export { OrderTableRow };