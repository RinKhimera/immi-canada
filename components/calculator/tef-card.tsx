"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  tefListeningNCLC,
  tefReadingNCLC,
  tefSpeakingWritingNCLC,
} from "@/hooks/tef-nclc-ranges"
import { tefSchema } from "@/validations/tef-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { RotateCcw } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const TefCard = () => {
  const [NCLCScore, setNCLCScore] = useState<number | null>(null)
  const [NCLClistening, setNCLCListening] = useState<number | null>(null)
  const [NCLCreading, setNCLCReading] = useState<number | null>(null)
  const [NCLCspeaking, setNCLCSpeaking] = useState<number | null>(null)
  const [NCLCwriting, setNCLCWriting] = useState<number | null>(null)

  const form = useForm<z.infer<typeof tefSchema>>({
    resolver: zodResolver(tefSchema),
    defaultValues: {
      listening: 145,
      reading: 121,
      speaking: 181,
      writing: 181,
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

  const getNCLCValueByName = (name: string) => {
    switch (name) {
      case "listening":
        return (
          <>
            NCLC <span className="text-primary">{NCLClistening}</span>
          </>
        )
      case "reading":
        return (
          <>
            NCLC <span className="text-primary">{NCLCreading}</span>
          </>
        )
      case "speaking":
        return (
          <>
            NCLC <span className="text-primary">{NCLCspeaking}</span>
          </>
        )
      case "writing":
        return (
          <p>
            NCLC <span className="text-primary">{NCLCwriting}</span>
          </p>
        )
      default:
        return null
    }
  }

  const onSubmit = (values: z.infer<typeof tefSchema>) => {
    const listeningScore = tefListeningNCLC(values.listening)
    const readingScore = tefReadingNCLC(values.reading)
    const speakingScore = tefSpeakingWritingNCLC(values.speaking)
    const writingScore = tefSpeakingWritingNCLC(values.writing)

    const lowestScore = Math.min(
      listeningScore,
      readingScore,
      speakingScore,
      writingScore
    )

    setNCLCListening(listeningScore)
    setNCLCReading(readingScore)
    setNCLCSpeaking(speakingScore)
    setNCLCWriting(writingScore)
    setNCLCScore(lowestScore)

    console.log({ listeningScore, readingScore, speakingScore, writingScore })
  }

  const resetScore = () => {
    form.reset({
      listening: 145,
      reading: 121,
      speaking: 181,
      writing: 181,
    })

    setNCLCScore(null)
    setNCLCListening(null)
    setNCLCReading(null)
    setNCLCSpeaking(null)
    setNCLCWriting(null)
  }

  return (
    <Card className="dark:border-muted">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl underline underline-offset-4 decoration-primary">
          TEF Canada / TEFAQ / TEF
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-md space-y-5 text-center"
          >
            {formFields.map(({ name, label }) => (
              <div key={name} className="flex items-end justify-center gap-2">
                <FormField
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

                <>
                  {NCLCScore !== null && (
                    <div className="w-24 pb-1.5 text-lg font-bold lg:w-28 lg:text-2xl text-nowrap">
                      {getNCLCValueByName(name)}
                    </div>
                  )}
                </>
              </div>
            ))}

            <div className="flex items-center justify-center space-x-5">
              <Button type="submit">Calculer</Button>
              <Button
                type="button"
                size="icon"
                variant="secondary"
                className="text-xl lg:text-2xl"
                onClick={resetScore}
              >
                <RotateCcw />
              </Button>
            </div>
          </form>
        </Form>

        <>
          {NCLCScore !== null && (
            <div className="mt-5 text-center text-3xl font-bold text-primary underline lg:text-5xl">
              <p>NCLC {NCLCScore}</p>
            </div>
          )}
        </>
      </CardContent>
    </Card>
  )
}
