"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Acronyms = {
  id: string
  acronym: string
  definition: string
}

export const columns: ColumnDef<Acronyms>[] = [
  {
    accessorKey: "acronym",
    header: "Abréviation",
  },
  {
    accessorKey: "definition",
    header: "Définition",
  },
]
