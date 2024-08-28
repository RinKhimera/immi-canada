import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/constants"

const FaqPage = () => {
  return (
    <main className="min-h-screen xl:px-16 pt-12">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-4xl max-w-3xl text-center font-medium">
          Retrouvez ici les questions les plus fréquemment posées
        </h1>
      </section>

      <section className="mt-10">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {faqData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  )
}

export default FaqPage
