"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownRight, ArrowUpRight, TrendingUp } from "lucide-react"
import { BarChart } from "@/components/charts/bar-chart"
import { LineChart } from "@/components/charts/line-chart"

export default function AnalyticsPage() {
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

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Time</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalMetrics.queries}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+18%</span> from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalMetrics.activeUsers}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+12%</span> from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalMetrics.sessions}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+15%</span> from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Queries Over Time</CardTitle>
            <CardDescription>Daily query volume for the past week</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BarChart data={analyticsData.queriesOverTime} />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>Monthly user growth</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <LineChart data={analyticsData.userGrowth} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Response Times</CardTitle>
            <CardDescription>Average response time metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Average</p>
                <p className="text-2xl font-bold">{analyticsData.responseTimes.average}s</p>
                <div className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowDownRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">-0.2s</span> from last month
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Peak</p>
                <p className="text-2xl font-bold">{analyticsData.responseTimes.peak}s</p>
                <div className="text-xs text-muted-foreground flex items-center mt-1">
                  <ArrowDownRight className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">-0.5s</span> from last month
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
            <CardDescription>Percentage of users who complete a desired action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-3xl font-bold">{analyticsData.conversionRate.value}%</p>
              <div className="text-sm text-muted-foreground flex items-center mt-1">
                <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                <span className="text-green-500">+0.8%</span> from last month
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Your conversion rate is above the industry average of 3.2%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

