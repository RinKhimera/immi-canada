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
  ieltsListeningCLB,
  ieltsReadingCLB,
  ieltsSpeakingWritingCLB,
} from "@/hooks/ielts-clb-ranges"
import { ieltsSchema } from "@/validations/ielts-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { RotateCcw } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export const IeltsCard = () => {
  const [CLBScore, setCLBScore] = useState<number | null>(null)
  const [CLBlistening, setCLBListening] = useState<number | null>(null)
  const [CLBreading, setCLBReading] = useState<number | null>(null)
  const [CLBspeaking, setCLBSpeaking] = useState<number | null>(null)
  const [CLBwriting, setCLBWriting] = useState<number | null>(null)

  const form = useForm<z.infer<typeof ieltsSchema>>({
    resolver: zodResolver(ieltsSchema),
    defaultValues: {
      listening: 4.5,
      reading: 3.5,
      speaking: 4,
      writing: 4,
    },
  })

  type FormField = {
    name: "listening" | "reading" | "speaking" | "writing"
    label: string
  }

  const formFields: FormField[] = [
    { name: "listening", label: "Listening" },
    { name: "reading", label: "Reading" },
    { name: "speaking", label: "Speaking" },
    { name: "writing", label: "Writing" },
  ]

  const getNCLCValueByName = (name: string) => {
    switch (name) {
      case "listening":
        return (
          <>
            CLB <span className="text-primary">{CLBlistening}</span>
          </>
        )
      case "reading":
        return (
          <>
            CLB <span className="text-primary">{CLBreading}</span>
          </>
        )
      case "speaking":
        return (
          <>
            CLB <span className="text-primary">{CLBspeaking}</span>
          </>
        )
      case "writing":
        return (
          <p>
            CLB <span className="text-primary">{CLBwriting}</span>
          </p>
        )
      default:
        return null
    }
  }

  const onSubmit = (values: z.infer<typeof ieltsSchema>) => {
    const listeningScore = ieltsListeningCLB(values.listening)
    const readingScore = ieltsReadingCLB(values.reading)
    const speakingScore = ieltsSpeakingWritingCLB(values.speaking)
    const writingScore = ieltsSpeakingWritingCLB(values.writing)

    const lowestScore = Math.min(
      listeningScore,
      readingScore,
      speakingScore,
      writingScore
    )

    setCLBListening(listeningScore)
    setCLBReading(readingScore)
    setCLBSpeaking(speakingScore)
    setCLBWriting(writingScore)
    setCLBScore(lowestScore)

    console.log({ listeningScore, readingScore, speakingScore, writingScore })
  }

  const resetScore = () => {
    form.reset({
      listening: 331,
      reading: 342,
      speaking: 4,
      writing: 4,
    })

    setCLBScore(null)
    setCLBListening(null)
    setCLBReading(null)
    setCLBSpeaking(null)
    setCLBWriting(null)
  }

  return (
    <Card className="dark:border-muted">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl underline underline-offset-4 decoration-primary">
          IELTS General
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
                          step="0.5"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-base lg:text-xl" />
                    </FormItem>
                  )}
                />

                <>
                  {CLBScore !== null && (
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
          {CLBScore !== null && (
            <div className="mt-5 text-center text-3xl font-bold text-primary underline lg:text-5xl">
              <p>NCLC {CLBScore}</p>
            </div>
          )}
        </>
      </CardContent>
    </Card>
  )
}
