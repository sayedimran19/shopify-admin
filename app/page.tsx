"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { BarChart } from "@/components/charts/bar-chart"
import { LineChart } from "@/components/charts/line-chart"

export default function DashboardPage() {
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

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Queries Today</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.queriesToday}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+12%</span> from yesterday
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.totalUsers}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+5%</span> from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users Today</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.activeUsersToday}</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">+8%</span> from yesterday
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.avgResponseTime}s</div>
            <div className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDownRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500">-0.3s</span> from last week
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Queries Overview</CardTitle>
            <CardDescription>Daily query volume for the past week</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BarChart data={weeklyData} />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Weekly active users</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <LineChart data={userActivityData} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Recent Queries</CardTitle>
            <CardDescription>Latest user interactions with your app</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentQueries.map((query) => (
                <div key={query.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>
                        {query.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{query.user}</p>
                      <p className="text-sm text-muted-foreground">{query.query}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{query.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Avatar({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>{children}</div>
  )
}

function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
      {children}
    </div>
  )
}

