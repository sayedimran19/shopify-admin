"use client"

import { useState, useCallback } from "react"
import { Page, Layout, Card, Tabs, TextField, Button, Stack, Text, Badge, Icon, SettingToggle } from "@shopify/polaris"
import { ClipboardMinor, DuplicateMinor, EmailMajor, NotificationMajor } from "@shopify/polaris-icons"
import AppLayout from "~/components/AppLayout"

export default function Settings() {
  const [selected, setSelected] = useState(0)
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")
  const [company, setCompany] = useState("Acme Inc.")
  const [apiKey, setApiKey] = useState("sk_test_shopify_123456789")
  const [webhookUrl, setWebhookUrl] = useState("https://your-app.com/api/webhook")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [weeklyReports, setWeeklyReports] = useState(false)
  const [newOrders, setNewOrders] = useState(true)
  const [orderStatusUpdates, setOrderStatusUpdates] = useState(true)
  const [lowInventoryAlerts, setLowInventoryAlerts] = useState(true)
  const [customerReviews, setCustomerReviews] = useState(false)
  const [securityAlerts, setSecurityAlerts] = useState(true)
  const [startTime, setStartTime] = useState("22:00")
  const [endTime, setEndTime] = useState("08:00")
  const [copied, setCopied] = useState(false)

  const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), [])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [apiKey])

  const tabs = [
    {
      id: "general",
      content: "General",
      panelID: "general-content",
    },
    {
      id: "api",
      content: "API",
      panelID: "api-content",
    },
    {
      id: "notifications",
      content: "Notifications",
      panelID: "notifications-content",
    },
  ]

  return (
    <AppLayout>
      <Page title="Settings">
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />

        {selected === 0 && (
          <Layout>
            <Layout.AnnotatedSection
              title="Account Information"
              description="Manage your account details and preferences"
            >
              <Card>
                <Card.Section>
                  <TextField label="Name" value={name} onChange={setName} autoComplete="name" />
                </Card.Section>
                <Card.Section>
                  <TextField label="Email" value={email} onChange={setEmail} autoComplete="email" type="email" />
                </Card.Section>
                <Card.Section>
                  <TextField label="Company" value={company} onChange={setCompany} autoComplete="organization" />
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Changes</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection title="Current Plan" description="Your current subscription plan">
              <Card>
                <Card.Section>
                  <Stack distribution="equalSpacing" alignment="center">
                    <Stack vertical spacing="extraTight">
                      <Text variant="headingMd">Premium Plan</Text>
                      <Text variant="bodyMd" color="subdued">
                        $29/month, billed monthly
                      </Text>
                    </Stack>
                    <Badge status="success">Active</Badge>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  <Text variant="bodyMd" color="subdued">
                    Your next billing date is April 20, 2025
                  </Text>
                </Card.Section>
                <Card.Section>
                  <Stack distribution="equalSpacing">
                    <Button outline>Cancel Subscription</Button>
                    <Button primary url="/plans">
                      Change Plan
                    </Button>
                  </Stack>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}

        {selected === 1 && (
          <Layout>
            <Layout.AnnotatedSection
              title="API Keys"
              description="Manage your API keys for integration with your Shopify store"
            >
              <Card>
                <Card.Section>
                  <TextField
                    label="API Key"
                    value={apiKey}
                    onChange={setApiKey}
                    readOnly
                    connectedRight={
                      <Button onClick={copyToClipboard} icon={copied ? DuplicateMinor : ClipboardMinor}>
                        {copied ? "Copied" : "Copy"}
                      </Button>
                    }
                    monospaced
                  />
                  <Text variant="bodyMd" color="subdued">
                    This key gives access to your Shopify store data. Keep it secure.
                  </Text>
                </Card.Section>
                <Card.Section>
                  <TextField label="Webhook URL" value={webhookUrl} onChange={setWebhookUrl} readOnly />
                </Card.Section>
                <Card.Section>
                  <Button primary>Regenerate API Key</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}

        {selected === 2 && (
          <Layout>
            <Layout.AnnotatedSection
              title="Notification Settings"
              description="Configure how you receive notifications"
            >
              <Card>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: emailNotifications ? "Disable" : "Enable",
                      onAction: () => setEmailNotifications(!emailNotifications),
                    }}
                    enabled={emailNotifications}
                  >
                    <Stack>
                      <Icon source={EmailMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Email Notifications</Text>
                        <Text variant="bodyMd" color="subdued">
                          Receive notifications via email
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: pushNotifications ? "Disable" : "Enable",
                      onAction: () => setPushNotifications(!pushNotifications),
                    }}
                    enabled={pushNotifications}
                  >
                    <Stack>
                      <Icon source={NotificationMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Push Notifications</Text>
                        <Text variant="bodyMd" color="subdued">
                          Receive push notifications in the app
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: weeklyReports ? "Disable" : "Enable",
                      onAction: () => setWeeklyReports(!weeklyReports),
                    }}
                    enabled={weeklyReports}
                  >
                    <Stack>
                      <Icon source={AnalyticsMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Weekly Reports</Text>
                        <Text variant="bodyMd" color="subdued">
                          Receive weekly summary reports
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Preferences</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection
              title="Push Notifications"
              description="Configure push notification preferences for your app"
            >
              <Card>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: newOrders ? "Disable" : "Enable",
                      onAction: () => setNewOrders(!newOrders),
                    }}
                    enabled={newOrders}
                  >
                    <Stack>
                      <Icon source={OrdersMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">New Orders</Text>
                        <Text variant="bodyMd" color="subdued">
                          Get notified when you receive a new order
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: orderStatusUpdates ? "Disable" : "Enable",
                      onAction: () => setOrderStatusUpdates(!orderStatusUpdates),
                    }}
                    enabled={orderStatusUpdates}
                  >
                    <Stack>
                      <Icon source={OrderStatusMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Order Status Updates</Text>
                        <Text variant="bodyMd" color="subdued">
                          Get notified when an order status changes
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: lowInventoryAlerts ? "Disable" : "Enable",
                      onAction: () => setLowInventoryAlerts(!lowInventoryAlerts),
                    }}
                    enabled={lowInventoryAlerts}
                  >
                    <Stack>
                      <Icon source={InventoryMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Low Inventory Alerts</Text>
                        <Text variant="bodyMd" color="subdued">
                          Get notified when product inventory is low
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: customerReviews ? "Disable" : "Enable",
                      onAction: () => setCustomerReviews(!customerReviews),
                    }}
                    enabled={customerReviews}
                  >
                    <Stack>
                      <Icon source={StarOutlineMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Customer Reviews</Text>
                        <Text variant="bodyMd" color="subdued">
                          Get notified when you receive a new customer review
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: securityAlerts ? "Disable" : "Enable",
                      onAction: () => setSecurityAlerts(!securityAlerts),
                    }}
                    enabled={securityAlerts}
                  >
                    <Stack>
                      <Icon source={SecurityMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Security Alerts</Text>
                        <Text variant="bodyMd" color="subdued">
                          Get notified about important security events
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section title="Quiet Hours">
                  <Stack distribution="fillEvenly">
                    <TextField label="Start Time" type="time" value={startTime} onChange={setStartTime} />
                    <TextField label="End Time" type="time" value={endTime} onChange={setEndTime} />
                  </Stack>
                  <Text variant="bodyMd" color="subdued">
                    During quiet hours, you'll only receive critical notifications
                  </Text>
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Notification Settings</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}
      </Page>
    </AppLayout>
  )
}

// Import missing icons
import {
  AnalyticsMajor,
  OrdersMajor,
  OrderStatusMajor,
  InventoryMajor,
  StarOutlineMajor,
  SecurityMajor,
} from "@shopify/polaris-icons"

