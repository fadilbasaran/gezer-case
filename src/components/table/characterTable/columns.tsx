import { Character } from "@/interface/character"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Character>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
]
