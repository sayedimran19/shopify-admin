"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("sk_test_shopify_123456789")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Manage your account details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="Acme Inc." />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Your current subscription plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Premium Plan</h3>
                  <p className="text-sm text-muted-foreground">$29/month, billed monthly</p>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Your next billing date is April 20, 2025</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel Subscription</Button>
              <Button asChild>
                <a href="/plans">Change Plan</a>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for integration with your Shopify store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex items-center space-x-2">
                  <Input id="api-key" value="sk_test_shopify_123456789" readOnly className="font-mono" />
                  <Button variant="outline" size="icon" onClick={copyToClipboard}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  This key gives access to your Shopify store data. Keep it secure.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" value="https://your-app.com/api/webhook" readOnly />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Regenerate API Key</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive push notifications in the app</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly summary reports</p>
                </div>
                <Switch checked={false} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>Configure push notification preferences for your app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Orders</Label>
                  <p className="text-sm text-muted-foreground">Get notified when you receive a new order</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Order Status Updates</Label>
                  <p className="text-sm text-muted-foreground">Get notified when an order status changes</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Low Inventory Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when product inventory is low</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Customer Reviews</Label>
                  <p className="text-sm text-muted-foreground">Get notified when you receive a new customer review</p>
                </div>
                <Switch checked={false} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about important security events</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="mt-6 space-y-2">
                <Label htmlFor="quiet-hours">Quiet Hours</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-time" className="text-xs text-muted-foreground">
                      Start Time
                    </Label>
                    <Input id="start-time" type="time" defaultValue="22:00" />
                  </div>
                  <div>
                    <Label htmlFor="end-time" className="text-xs text-muted-foreground">
                      End Time
                    </Label>
                    <Input id="end-time" type="time" defaultValue="08:00" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  During quiet hours, you'll only receive critical notifications
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Switch({ checked }: { checked: boolean }) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isChecked ? "bg-primary" : "bg-input"}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${isChecked ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  )
}

