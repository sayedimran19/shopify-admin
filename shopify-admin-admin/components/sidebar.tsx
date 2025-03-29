"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Settings, Home, Package, HelpCircle, Palette, ChevronDown, ChevronUp, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Plans",
    icon: Package,
    href: "/plans",
  },
  {
    label: "FAQs",
    icon: HelpCircle,
    href: "/faqs",
  },
  {
    label: "Customization",
    icon: Palette,
    href: "/customization",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-card border-r transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <span className="font-bold">ShopifyApp</span>
          </Link>
        )}
        {isCollapsed && <Package className="h-6 w-6 mx-auto" />}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(isCollapsed && "mx-auto")}
        >
          {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                pathname === route.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
              )}
            >
              <route.icon className="h-4 w-4" />
              {!isCollapsed && <span>{route.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t mt-auto">
        {!isCollapsed ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-xs">
                  <span className="font-medium">John Doe</span>
                  <span className="text-muted-foreground">john@example.com</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Avatar className="h-8 w-8 mx-auto">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  )
}

