"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup as RadGroup, RadioGroupItem as RadGroupItem } from "@/components/ui/radio-group"
import { Textarea as TArea } from "@/components/ui/textarea"
import { Upload, Check } from "lucide-react"

export default function CustomizationPage() {
  const [storeName, setStoreName] = useState("My Awesome Store")
  const [storeDescription, setStoreDescription] = useState("The best products for your needs")
  const [colorScheme, setColorScheme] = useState("blue")
  const [logoPreview, setLogoPreview] = useState("/placeholder.svg")

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const colorSchemes = [
    { value: "blue", label: "Blue", color: "#3b82f6" },
    { value: "green", label: "Green", color: "#10b981" },
    { value: "purple", label: "Purple", color: "#8b5cf6" },
    { value: "red", label: "Red", color: "#ef4444" },
    { value: "orange", label: "Orange", color: "#f97316" },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customization</h2>
      </div>

      <Tabs defaultValue="branding" className="space-y-4">
        <TabsList>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="widgets">Widgets</TabsTrigger>
        </TabsList>

        <TabsContent value="branding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
              <CardDescription>Customize your store's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-description">Store Description</Label>
                <TArea
                  id="store-description"
                  value={storeDescription}
                  onChange={(e) => setStoreDescription(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Store Logo</CardTitle>
              <CardDescription>Upload your store logo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 rounded-md border overflow-hidden">
                  <img
                    src={logoPreview || "/placeholder.svg"}
                    alt="Store logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="logo" className="cursor-pointer">
                    <div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                      <Upload className="h-4 w-4" />
                      <span>Upload Logo</span>
                    </div>
                  </Label>
                  <Input id="logo" type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                  <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 2MB.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Logo</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>Choose a color scheme for your store</CardDescription>
            </CardHeader>
            <CardContent>
              <RadGroup
                value={colorScheme}
                onValueChange={setColorScheme}
                className="grid grid-cols-2 gap-4 md:grid-cols-5"
              >
                {colorSchemes.map((scheme) => (
                  <div key={scheme.value} className="flex items-center space-x-2">
                    <RadGroupItem value={scheme.value} id={`color-${scheme.value}`} className="sr-only" />
                    <Label
                      htmlFor={`color-${scheme.value}`}
                      className="flex flex-col items-center gap-2 rounded-md border-2 p-4 cursor-pointer hover:bg-accent"
                      style={{ borderColor: colorScheme === scheme.value ? scheme.color : "transparent" }}
                    >
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: scheme.color }}
                      >
                        {colorScheme === scheme.value && <Check className="h-5 w-5 text-white" />}
                      </div>
                      <span>{scheme.label}</span>
                    </Label>
                  </div>
                ))}
              </RadGroup>
            </CardContent>
            <CardFooter>
              <Button>Apply Theme</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Choose fonts for your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heading-font">Heading Font</Label>
                <select
                  id="heading-font"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="opensans">Open Sans</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="lato">Lato</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="body-font">Body Font</Label>
                <select
                  id="body-font"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="opensans">Open Sans</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="lato">Lato</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Typography</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="widgets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Widget Settings</CardTitle>
              <CardDescription>Configure widgets that appear on your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Product Recommendations</Label>
                  <p className="text-sm text-muted-foreground">Show product recommendations on product pages</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Recently Viewed</Label>
                  <p className="text-sm text-muted-foreground">Show recently viewed products</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Customer Reviews</Label>
                  <p className="text-sm text-muted-foreground">Display customer reviews on product pages</p>
                </div>
                <Switch checked={true} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Social Media Icons</Label>
                  <p className="text-sm text-muted-foreground">Show social media icons in the footer</p>
                </div>
                <Switch checked={false} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Widget Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }) {
  return (
    <textarea
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
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

