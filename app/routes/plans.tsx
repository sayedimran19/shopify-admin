import { Page, Layout, Card, Text, Button, Stack, Badge, Icon } from "@shopify/polaris"
import { ChecklistMajor } from "@shopify/polaris-icons"
import AppLayout from "~/components/AppLayout"

export default function Plans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic features for small stores",
      features: ["Up to 100 queries per month", "Basic analytics", "Email support", "1 user account"],
      current: false,
      popular: false,
    },
    {
      name: "Starter",
      price: "$19",
      description: "Everything in Free plus more features",
      features: [
        "Up to 1,000 queries per month",
        "Advanced analytics",
        "Priority email support",
        "3 user accounts",
        "Custom branding",
      ],
      current: false,
      popular: true,
    },
    {
      name: "Premium",
      price: "$49",
      description: "Professional features for growing businesses",
      features: [
        "Up to 5,000 queries per month",
        "Advanced analytics with exports",
        "Priority email & chat support",
        "10 user accounts",
        "Custom branding",
        "API access",
        "Webhooks",
      ],
      current: true,
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Advanced features for large businesses",
      features: [
        "Unlimited queries",
        "Advanced analytics with exports",
        "24/7 phone, email & chat support",
        "Unlimited user accounts",
        "Custom branding",
        "API access",
        "Webhooks",
        "Dedicated account manager",
        "Custom integrations",
      ],
      current: false,
      popular: false,
    },
  ]

  return (
    <AppLayout>
      <Page title="Subscription Plans">
        <Layout>
          {plans.map((plan) => (
            <Layout.Section key={plan.name} oneQuarter>
              <Card>
                <Card.Section>
                  <Stack distribution="equalSpacing">
                    <Text variant="headingLg">{plan.name}</Text>
                    {plan.popular && <Badge status="info">Popular</Badge>}
                    {plan.current && <Badge status="success">Current</Badge>}
                  </Stack>
                </Card.Section>
                <Card.Section>
                  <Stack vertical spacing="tight">
                    <Text variant="headingXl">{plan.price}</Text>
                    <Text variant="bodyMd" color="subdued">
                      /month
                    </Text>
                  </Stack>
                  <Text variant="bodyMd" color="subdued">
                    {plan.description}
                  </Text>
                </Card.Section>
                <Card.Section title="Features">
                  <Stack vertical>
                    {plan.features.map((feature) => (
                      <Stack alignment="center" key={feature}>
                        <Icon source={ChecklistMajor} color="success" />
                        <Text variant="bodyMd">{feature}</Text>
                      </Stack>
                    ))}
                  </Stack>
                </Card.Section>
                <Card.Section>
                  {plan.current ? (
                    <Button fullWidth disabled>
                      Current Plan
                    </Button>
                  ) : (
                    <Button fullWidth primary={plan.popular}>
                      {plan.name === "Free" ? "Get Started" : "Upgrade"}
                    </Button>
                  )}
                </Card.Section>
              </Card>
            </Layout.Section>
          ))}

          <Layout.Section>
            <Card title="Need a custom plan?">
              <Card.Section>
                <Text variant="bodyMd">
                  Contact our sales team for a custom solution tailored to your specific needs
                </Text>
              </Card.Section>
              <Card.Section>
                <Button outline>Contact Sales</Button>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppLayout>
  )
}

