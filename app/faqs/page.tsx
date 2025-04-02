"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea as TextareaPrimitive } from "@/components/ui/textarea"
import { Plus, Trash, Save, Edit } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I install the app?",
      answer:
        "You can install our app directly from the Shopify App Store. Simply search for our app name and click 'Add app'.",
      editing: false,
    },
    {
      id: 2,
      question: "How do I connect my store?",
      answer:
        "After installation, you'll be prompted to authorize the app with your Shopify store. Follow the on-screen instructions to complete the connection.",
      editing: false,
    },
    {
      id: 3,
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
      editing: false,
    },
  ])

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
  })

  const addFaq = () => {
    if (newFaq.question.trim() === "" || newFaq.answer.trim() === "") return

    setFaqs([
      ...faqs,
      {
        id: Date.now(),
        question: newFaq.question,
        answer: newFaq.answer,
        editing: false,
      },
    ])

    setNewFaq({
      question: "",
      answer: "",
    })
  }

  const deleteFaq = (id: number) => {
    setFaqs(faqs.filter((faq) => faq.id !== id))
  }

  const toggleEdit = (id: number) => {
    setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, editing: !faq.editing } : faq)))
  }

  const updateFaq = (id: number, data: { question?: string; answer?: string }) => {
    setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, ...data } : faq)))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">FAQs</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage FAQs</CardTitle>
          <CardDescription>Create and edit frequently asked questions for your customers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <div className="flex items-center">
                  <AccordionTrigger className="flex-1">
                    {faq.editing ? (
                      <Input
                        value={faq.question}
                        onChange={(e) => updateFaq(faq.id, { question: e.target.value })}
                        onClick={(e) => e.stopPropagation()}
                        className="mr-2"
                      />
                    ) : (
                      faq.question
                    )}
                  </AccordionTrigger>
                  <div className="flex gap-2 mr-4">
                    {faq.editing ? (
                      <Button variant="ghost" size="icon" onClick={() => toggleEdit(faq.id)}>
                        <Save className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" onClick={() => toggleEdit(faq.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" onClick={() => deleteFaq(faq.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <AccordionContent>
                  {faq.editing ? (
                    <TextareaPrimitive
                      value={faq.answer}
                      onChange={(e) => updateFaq(faq.id, { answer: e.target.value })}
                      className="min-h-[100px]"
                    />
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New FAQ</CardTitle>
          <CardDescription>Create a new frequently asked question</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input
              id="question"
              placeholder="Enter the question"
              value={newFaq.question}
              onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="answer">Answer</Label>
            <TextareaPrimitive
              id="answer"
              placeholder="Enter the answer"
              className="min-h-[100px]"
              value={newFaq.answer}
              onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addFaq}>
            <Plus className="mr-2 h-4 w-4" />
            Add FAQ
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

