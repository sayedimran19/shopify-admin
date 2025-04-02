"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useNavigate, useLocation } from "@remix-run/react"
import { Frame, Navigation, TopBar } from "@shopify/polaris"
import {
  HomeIcon,
  ChartLineIcon,
  SettingsIcon,
  PlanIcon,
  QuestionCircleIcon,
  ColorIcon,
  ArrowRightIcon,
  ExitIcon,
} from "@shopify/polaris-icons"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [userMenuActive, setUserMenuActive] = useState(false)
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)

  const toggleUserMenu = useCallback(() => setUserMenuActive((userMenuActive) => !userMenuActive), [])

  const toggleMobileNavigation = useCallback(
    () => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
    [],
  )

  const userMenuActions = [
    {
      items: [
        { content: "Profile", icon: ArrowRightMinor },
        { content: "Settings", icon: SettingsMajor },
        { content: "Log out", icon: LogOutMinor },
      ],
    },
  ]

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="John Doe"
      detail="john@example.com"
      initials="JD"
      open={userMenuActive}
      onToggle={toggleUserMenu}
    />
  )

  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Dashboard",
            icon: HomeIcon,
            selected: location.pathname === "/",
            onClick: () => {
              navigate("/")
              return false
            },
          },
          {
            url: "/analytics",
            label: "Analytics",
            icon: ChartLineIcon,
            selected: location.pathname === "/analytics",
            onClick: () => {
              navigate("/analytics")
              return false
            },
          },
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsIcon,
            selected: location.pathname === "/settings",
            onClick: () => {
              navigate("/settings")
              return false
            },
          },
          {
            url: "/plans",
            label: "Plans",
            icon: PlanIcon,
            selected: location.pathname === "/plans",
            onClick: () => {
              navigate("/plans")
              return false
            },
          },



          {
            url: "/faqs",
            label: "FAQs",
            icon: QuestionCircleIcon,
            selected: location.pathname === "/faqs",
            onClick: () => {
              navigate("/faqs")
              return false
            },
          },
          {
            url: "/customization",
            label: "Customization",
            icon: ColorIcon,
            selected: location.pathname === "/customization",
            onClick: () => {
              navigate("/customization")
              return false
            },
          },
        ]}
      />
    </Navigation>
  )

  const topBarMarkup = (
    <TopBar showNavigationToggle userMenu={userMenuMarkup} onNavigationToggle={toggleMobileNavigation} />
  )

  return (
    <Frame
      topBar={topBarMarkup}
      navigation={navigationMarkup}
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigation}
    >
      {children}
    </Frame>
  )
}

