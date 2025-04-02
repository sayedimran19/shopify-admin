"use client"

import { useState } from "react"
import { Page, Layout, Card, Text, DataTable, Tabs, Icon, Stack } from "@shopify/polaris"
import { ChartLineIcon, PersonIcon, ClockIcon, ArrowUpIcon, ArrowDownIcon } from "~/utils/icons"
import AppLayout from "~/components/AppLayout"
import { LineChart, BarChart } from "~/components/Charts"

export default function Dashboard() {
  const [selected, setSelected] = useState(0)

  const handleTabChange = (selectedTabIndex: number) => setSelected(selectedTabIndex)

  const dashboardData = {
    queriesToday: 15,
    totalUsers: 100,
    activeUsersToday: 20,
    avgResponseTime: 2.5,
    recentQueries: [
      { id: 1, user: "John Doe", query: "How to add products?", time: "5 min ago" },
      { id: 2, user: "Jane Smith", query: "Setting up shipping", time: "15 min ago" },
      { id: 3, user: "Mike Johnson", query: "Payment integration", time: "30 min ago" },
      { id: 4, user: "Sarah Williams", query: "Customer support", time: "1 hour ago" },
    ],
  }

  const weeklyData = [
    { name: "Mon", value: 12 },
    { name: "Tue", value: 18 },
    { name: "Wed", value: 15 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 20 },
    { name: "Sat", value: 17 },
    { name: "Sun", value: 15 },
  ]

  const userActivityData = [
    { name: "Week 1", value: 40 },
    { name: "Week 2", value: 45 },
    { name: "Week 3", value: 55 },
    { name: "Week 4", value: 60 },
  ]

  const tabs = [
    {
      id: "overview",
      content: "Overview",
    },
    {
      id: "analytics",
      content: "Analytics",
    },
    {
      id: "reports",
      content: "Reports",
    },
  ]

  const rows = dashboardData.recentQueries.map((query) => [
    <Stack alignment="center" key={query.id}>
      <Avatar customer name={query.user} />
      <Stack vertical spacing="extraTight">
        <Text variant="bodyMd" fontWeight="bold">
          {query.user}
        </Text>
        <Text variant="bodySm" color="subdued">
          {query.query}
        </Text>
      </Stack>
    </Stack>,
    <Text key={query.id} color="subdued">
      {query.time}
    </Text>,
  ])

  return (
    <AppLayout>
      <Page title="Dashboard">
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
        <Layout>
          <Layout.Section oneHalf>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Queries Today</Text>
                    <Text variant="headingLg">{dashboardData.queriesToday}</Text>
                  </Stack>
                  <Icon source={ChartLineIcon} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpIcon} color="success" />
                  <Text variant="bodySm" color="success">
                    +12% from yesterday
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Total Users</Text>
                    <Text variant="headingLg">{dashboardData.totalUsers}</Text>
                  </Stack>
                  <Icon source={PersonIcon} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpIcon} color="success" />
                  <Text variant="bodySm" color="success">
                    +5% from last week
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Active Users Today</Text>
                    <Text variant="headingLg">{dashboardData.activeUsersToday}</Text>
                  </Stack>
                  <Icon source={PersonIcon} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpIcon} color="success" />
                  <Text variant="bodySm" color="success">
                    +8% from yesterday
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Avg. Response Time</Text>
                    <Text variant="headingLg">{dashboardData.avgResponseTime}s</Text>
                  </Stack>
                  <Icon source={ClockIcon} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowDownIcon} color="success" />
                  <Text variant="bodySm" color="success">
                    -0.3s from last week
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card title="Queries Overview">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Daily query volume for the past week
                </Text>
                <div style={{ height: "300px" }}>
                  <BarChart data={weeklyData} />
                </div>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section secondary>
            <Card title="User Activity">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Weekly active users
                </Text>
                <div style={{ height: "300px" }}>
                  <LineChart data={userActivityData} />
                </div>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card title="Recent Queries">
              <Card.Section>
                <DataTable columnContentTypes={["text", "text"]} headings={["User", "Time"]} rows={rows} />
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppLayout>
  )
}

function Avatar({ customer, name }: { customer: boolean; name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div
      style={{
        backgroundColor: "#5c6ac4",
        color: "white",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {initials}
    </div>
  )
}

