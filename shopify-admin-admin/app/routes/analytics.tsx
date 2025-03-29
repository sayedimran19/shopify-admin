"use client"

import { useState } from "react"
import { Page, Layout, Card, Text, Tabs, Stack, Icon } from "@shopify/polaris"
import { AnalyticsMajor, ArrowUpMinor, ArrowDownMinor } from "@shopify/polaris-icons"
import AppLayout from "~/components/AppLayout"
import { LineChart, BarChart } from "~/components/Charts"

export default function Analytics() {
  const [selected, setSelected] = useState(0)

  const handleTabChange = (selectedTabIndex: number) => setSelected(selectedTabIndex)

  const analyticsData = {
    queriesOverTime: [
      { name: "Mar 09", value: 18 },
      { name: "Mar 10", value: 22 },
      { name: "Mar 11", value: 27 },
      { name: "Mar 12", value: 33 },
      { name: "Mar 13", value: 30 },
      { name: "Mar 14", value: 38 },
      { name: "Mar 15", value: 42 },
      { name: "Mar 16", value: 48 },
    ],
    userGrowth: [
      { name: "Dec 2024", value: 40 },
      { name: "Jan 2025", value: 60 },
      { name: "Feb 2025", value: 85 },
      { name: "Mar 2025", value: 110 },
    ],
    responseTimes: { average: 2.3, trend: "down", peak: 3.8 },
    conversionRate: { value: 4.5, trend: "up" },
    totalMetrics: { queries: 258, activeUsers: 92, sessions: 315 },
  }

  const tabs = [
    {
      id: "all",
      content: "All Time",
    },
    {
      id: "month",
      content: "This Month",
    },
    {
      id: "week",
      content: "This Week",
    },
  ]

  return (
    <AppLayout>
      <Page title="Analytics">
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
        <Layout>
          <Layout.Section oneThird>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Total Queries</Text>
                    <Text variant="headingLg">{analyticsData.totalMetrics.queries}</Text>
                  </Stack>
                  <Icon source={AnalyticsMajor} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpMinor} color="success" />
                  <Text variant="bodySm" color="success">
                    +18% from last month
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Active Users</Text>
                    <Text variant="headingLg">{analyticsData.totalMetrics.activeUsers}</Text>
                  </Stack>
                  <Icon source={AnalyticsMajor} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpMinor} color="success" />
                  <Text variant="bodySm" color="success">
                    +12% from last month
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneThird>
            <Card>
              <Card.Section>
                <Stack distribution="equalSpacing" alignment="center">
                  <Stack vertical spacing="extraTight">
                    <Text variant="headingMd">Total Sessions</Text>
                    <Text variant="headingLg">{analyticsData.totalMetrics.sessions}</Text>
                  </Stack>
                  <Icon source={AnalyticsMajor} color="base" />
                </Stack>
                <Stack spacing="tight" alignment="center">
                  <Icon source={ArrowUpMinor} color="success" />
                  <Text variant="bodySm" color="success">
                    +15% from last month
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card title="Queries Over Time">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Daily query volume for the past week
                </Text>
                <div style={{ height: "300px" }}>
                  <BarChart data={analyticsData.queriesOverTime} />
                </div>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card title="User Growth">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Monthly user growth
                </Text>
                <div style={{ height: "300px" }}>
                  <LineChart data={analyticsData.userGrowth} />
                </div>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card title="Response Times">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Average response time metrics
                </Text>
                <Layout>
                  <Layout.Section oneHalf>
                    <Stack vertical spacing="tight">
                      <Text variant="bodyMd" color="subdued">
                        Average
                      </Text>
                      <Text variant="headingLg">{analyticsData.responseTimes.average}s</Text>
                      <Stack spacing="tight" alignment="center">
                        <Icon source={ArrowDownMinor} color="success" />
                        <Text variant="bodySm" color="success">
                          -0.2s from last month
                        </Text>
                      </Stack>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section oneHalf>
                    <Stack vertical spacing="tight">
                      <Text variant="bodyMd" color="subdued">
                        Peak
                      </Text>
                      <Text variant="headingLg">{analyticsData.responseTimes.peak}s</Text>
                      <Stack spacing="tight" alignment="center">
                        <Icon source={ArrowDownMinor} color="success" />
                        <Text variant="bodySm" color="success">
                          -0.5s from last month
                        </Text>
                      </Stack>
                    </Stack>
                  </Layout.Section>
                </Layout>
              </Card.Section>
            </Card>
          </Layout.Section>

          <Layout.Section oneHalf>
            <Card title="Conversion Rate">
              <Card.Section>
                <Text variant="bodyMd" color="subdued">
                  Percentage of users who complete a desired action
                </Text>
                <Stack vertical spacing="tight">
                  <Text variant="headingXl">{analyticsData.conversionRate.value}%</Text>
                  <Stack spacing="tight" alignment="center">
                    <Icon source={ArrowUpMinor} color="success" />
                    <Text variant="bodySm" color="success">
                      +0.8% from last month
                    </Text>
                  </Stack>
                  <Text variant="bodyMd" color="subdued">
                    Your conversion rate is above the industry average of 3.2%
                  </Text>
                </Stack>
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppLayout>
  )
}

