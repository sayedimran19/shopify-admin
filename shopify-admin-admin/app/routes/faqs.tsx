"use client"

import { useState, useCallback } from "react"
import { Page, Layout, Card, TextField, Button, Stack, Text, Collapsible } from "@shopify/polaris"
import { PlusMinor, DeleteMinor, EditMinor, ChevronDownMinor, ChevronUpMinor } from "@shopify/polaris-icons"
import AppLayout from "~/components/AppLayout"

export default function FAQs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I install the app?",
      answer:
        "You can install our app directly from the Shopify App Store. Simply search for our app name and click 'Add app'.",
      editing: false,
      expanded: false,
    },
    {
      id: 2,
      question: "How do I connect my store?",
      answer:
        "After installation, you'll be prompted to authorize the app with your Shopify store. Follow the on-screen instructions to complete the connection.",
      editing: false,
      expanded: false,
    },
    {
      id: 3,
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
      editing: false,
      expanded: false,
    },
  ])

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
  })

  const handleNewQuestionChange = useCallback((value) => setNewFaq({ ...newFaq, question: value }), [newFaq])

  const handleNewAnswerChange = useCallback((value) => setNewFaq({ ...newFaq, answer: value }), [newFaq])

  const addFaq = useCallback(() => {
    if (newFaq.question.trim() === "" || newFaq.answer.trim() === "") return

    setFaqs([
      ...faqs,
      {
        id: Date.now(),
        question: newFaq.question,
        answer: newFaq.answer,
        editing: false,
        expanded: false,
      },
    ])

    setNewFaq({
      question: "",
      answer: "",
    })
  }, [faqs, newFaq])

  const deleteFaq = useCallback(
    (id) => {
      setFaqs(faqs.filter((faq) => faq.id !== id))
    },
    [faqs],
  )

  const toggleEdit = useCallback(
    (id) => {
      setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, editing: !faq.editing } : faq)))
    },
    [faqs],
  )

  const toggleExpand = useCallback(
    (id) => {
      setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, expanded: !faq.expanded } : faq)))
    },
    [faqs],
  )

  const updateFaq = useCallback(
    (id, data) => {
      setFaqs(faqs.map((faq) => (faq.id === id ? { ...faq, ...data } : faq)))
    },
    [faqs],
  )

  return (
    <AppLayout>
      <Page title="FAQs">
        <Layout>
          <Layout.Section>
            <Card title="Manage FAQs">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Create and edit frequently asked questions for your customers
                </Text>
              </Card.Section>

              {faqs.map((faq) => (
                <Card.Section key={faq.id}>
                  <Stack distribution="equalSpacing" alignment="center">
                    <Stack.Item fill>
                      {faq.editing ? (
                        <TextField value={faq.question} onChange={(value) => updateFaq(faq.id, { question: value })} />
                      ) : (
                        <Button
                          plain
                          onClick={() => toggleExpand(faq.id)}
                          icon={faq.expanded ? ChevronUpMinor : ChevronDownMinor}
                        >
                          <Text variant="headingMd">{faq.question}</Text>
                        </Button>
                      )}
                    </Stack.Item>
                    <Stack spacing="tight">
                      <Button plain icon={faq.editing ? SaveMinor : EditMinor} onClick={() => toggleEdit(faq.id)} />
                      <Button plain icon={DeleteMinor} onClick={() => deleteFaq(faq.id)} />
                    </Stack>
                  </Stack>

                  <Collapsible open={faq.expanded || faq.editing} id={`faq-${faq.id}`}>
                    <div style={{ marginTop: "1rem" }}>
                      {faq.editing ? (
                        <TextField
                          value={faq.answer}
                          onChange={(value) => updateFaq(faq.id, { answer: value })}
                          multiline={4}
                        />
                      ) : (
                        <Text variant="bodyMd">{faq.answer}</Text>
                      )}
                    </div>
                  </Collapsible>
                </Card.Section>
              ))}
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card title="Add New FAQ">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Create a new frequently asked question
                </Text>
              </Card.Section>
              <Card.Section>
                <TextField
                  label="Question"
                  value={newFaq.question}
                  onChange={handleNewQuestionChange}
                  placeholder="Enter the question"
                />
              </Card.Section>
              <Card.Section>
                <TextField
                  label="Answer"
                  value={newFaq.answer}
                  onChange={handleNewAnswerChange}
                  placeholder="Enter the answer"
                  multiline={4}
                />
              </Card.Section>
              <Card.Section>
                <Button primary icon={PlusMinor} onClick={addFaq}>
                  Add FAQ
                </Button>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppLayout>
  )
}

// Import missing icons
import { SaveMinor } from "@shopify/polaris-icons"

