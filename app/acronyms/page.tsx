import { acronymsDefinitions } from "@/constants"
import { columns } from "./columns"
import { DataTable } from "./data-table"

const AcronymsPage = () => {
  return (
    <main className="min-h-screen xl:px-16 pt-12">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl max-w-3xl text-center font-medium">
          Tout ce que vous devez savoir sur les{" "}
          <span className="text-primary font-bold">sigles </span>
          et <span className="text-primary font-bold">abréviations </span>
          en un seul endroit!
        </h1>
      </section>

      <section className="container mx-auto py-10">
        <DataTable columns={columns} data={acronymsDefinitions} />
      </section>
    </main>
  )
}

export default AcronymsPage
