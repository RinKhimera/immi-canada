"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  listeningNCLC,
  readingNCLC,
  speakingWritingNCLC,
} from "@/hooks/nclc-ranges"
import { tcfSchema } from "@/validations/tcf"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const TcfCard = () => {
  const form = useForm<z.infer<typeof tcfSchema>>({
    resolver: zodResolver(tcfSchema),
    defaultValues: {
      listening: 331,
      reading: 342,
      speaking: 4,
      writing: 4,
    },
  })

  type FormField = {
    name: "listening" | "reading" | "speaking" | "writing"
    label: string
  }

  const formFields: FormField[] = [
    { name: "listening", label: "Compréhension orale" },
    { name: "reading", label: "Compréhension écrite" },
    { name: "speaking", label: "Expression orale" },
    { name: "writing", label: "Expression écrite" },
  ]

  const onSubmit = (values: z.infer<typeof tcfSchema>) => {
    const listeningScore = listeningNCLC(values.listening)
    const readingScore = readingNCLC(values.reading)
    const speakingScore = speakingWritingNCLC(values.speaking)
    const writingScore = speakingWritingNCLC(values.writing)

    console.log({ listeningScore, readingScore, speakingScore, writingScore })
  }

  return (
    <Card className="border-muted">
      <CardHeader className="text-center">
        <CardTitle>TCF Canada / TCF Québec / TCF</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-md space-y-5 text-center"
          >
            {formFields.map(({ name, label }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl lg:text-2xl">
                      {label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-center text-2xl font-bold"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-base lg:text-xl" />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit">Calculer</Button>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
