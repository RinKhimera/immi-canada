import { TcfCard } from "@/components/calculator/tcf-card"
import { TefCard } from "@/components/calculator/tef-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TriangleAlert } from "lucide-react"

const CalculatorPage = () => {
  const tabItems = [
    { value: "TCF", label: "TCF" },
    { value: "TEF", label: "TEF" },
    { value: "IELTS", label: "IELTS" },
  ]

  return (
    <main className="min-h-screen xl:px-16 py-12">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl max-w-3xl font-medium">
          Cet outil vous aide à déterminer l&apos;admissibilité de vos tests de
          langue aux programmes{" "}
          <span className="text-primary font-bold">Entrée Express</span> et{" "}
          <span className="text-primary font-bold">Arrima.</span>
        </h1>

        <h3 className="mt-5 text-xl max-w-2xl">
          Votre niveau de compétence linguistique est vérifié en fonction de vos{" "}
          <span className="text-primary font-bold">NCLC</span> (Niveaux de
          compétence linguistique canadiens) pour le français et{" "}
          <span className="text-primary font-bold">CLB</span> (Canadian Language
          Benchmarks) pour l&apos;anglais.
        </h3>

        <h3 className="flex flex-col items-center text-lg gap-2 mt-6 max-w-2xl">
          <TriangleAlert size={40} className="text-primary" />
          <div>
            Veuillez noter que le niveau{" "}
            <span className="text-primary font-bold">
              minimum d&apos;admissibilité
            </span>{" "}
            pour les quatre compétences linguistiques (CE, CO, EE, EO) est le{" "}
            <span className="text-primary font-bold">NCLC / CLB 7</span>
          </div>
        </h3>
      </section>

      <section className="">
        <h1 className="text-4xl lg:text-5xl  mx-auto mt-16 font-medium max-w-xl text-center">
          Quel résultat allons-nous évaluer aujourd&apos;hui ?
        </h1>

        <div className="mt-5">
          <Tabs
            defaultValue="TCF"
            activationMode="manual"
            className="max-w-3xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3">
              {tabItems.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="text-center data-[state=active]:bg-primary/50 dark:data-[state=active]:bg-primary/60"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="TCF">
              <TcfCard />
            </TabsContent>
            <TabsContent value="TEF">
              <TefCard />
            </TabsContent>
            <TabsContent value="IELTS">
              Make changes to your account here.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

export default CalculatorPage
