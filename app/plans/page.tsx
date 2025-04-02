"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PlansPage() {
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
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Subscription Plans</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${plan.popular ? "border-primary" : ""} ${plan.current ? "bg-muted/50" : ""}`}
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{plan.name}</CardTitle>
                {plan.popular && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    Popular
                  </span>
                )}
                {plan.current && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-baseline text-2xl font-bold">
                {plan.price}
                <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.current ? (
                <Button className="w-full" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.name === "Free" ? "Get Started" : "Upgrade"}
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Need a custom plan?</CardTitle>
            <CardDescription>
              Contact our sales team for a custom solution tailored to your specific needs
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

