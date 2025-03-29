"use client"

import { useState, useCallback } from "react"
import {
  Page,
  Layout,
  Card,
  Tabs,
  TextField,
  Button,
  Stack,
  Text,
  DropZone,
  Thumbnail,
  Select,
  SettingToggle,
  Icon,
} from "@shopify/polaris"
import { LayoutMajor } from "@shopify/polaris-icons"
import AppLayout from "~/components/AppLayout"

export default function Customization() {
  const [selected, setSelected] = useState(0)
  const [storeName, setStoreName] = useState("My Awesome Store")
  const [storeDescription, setStoreDescription] = useState("The best products for your needs")
  const [colorScheme, setColorScheme] = useState("blue")
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState("/placeholder.svg")
  const [headingFont, setHeadingFont] = useState("inter")
  const [bodyFont, setBodyFont] = useState("inter")
  const [productRecommendations, setProductRecommendations] = useState(true)
  const [recentlyViewed, setRecentlyViewed] = useState(true)
  const [customerReviews, setCustomerReviews] = useState(true)
  const [socialMediaIcons, setSocialMediaIcons] = useState(false)

  const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), [])

  const handleDropZoneDrop = useCallback((_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0]
      setLogoFile(file)

      const reader = new FileReader()
      reader.onload = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleColorSchemeChange = useCallback((value: string) => setColorScheme(value), [])

  const handleHeadingFontChange = useCallback((value: string) => setHeadingFont(value), [])

  const handleBodyFontChange = useCallback((value: string) => setBodyFont(value), [])

  const colorSchemeOptions = [
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Purple", value: "purple" },
    { label: "Red", value: "red" },
    { label: "Orange", value: "orange" },
  ]

  const fontOptions = [
    { label: "Inter", value: "inter" },
    { label: "Roboto", value: "roboto" },
    { label: "Open Sans", value: "opensans" },
    { label: "Montserrat", value: "montserrat" },
    { label: "Lato", value: "lato" },
  ]

  const tabs = [
    {
      id: "branding",
      content: "Branding",
      panelID: "branding-content",
    },
    {
      id: "appearance",
      content: "Appearance",
      panelID: "appearance-content",
    },
    {
      id: "widgets",
      content: "Widgets",
      panelID: "widgets-content",
    },
  ]

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"]

  const fileUpload = !logoFile && <DropZone.FileUpload actionHint="or drop files to upload" />

  const logoPreviewMarkup = logoFile && (
    <Stack>
      <Thumbnail size="large" alt={logoFile.name} source={logoPreview} />
      <div>
        {logoFile.name}
        <Text variant="bodySm" as="p">
          {logoFile.size} bytes
        </Text>
      </div>
    </Stack>
  )

  return (
    <AppLayout>
      <Page title="Customization">
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} />

        {selected === 0 && (
          <Layout>
            <Layout.AnnotatedSection title="Store Information" description="Customize your store's basic information">
              <Card>
                <Card.Section>
                  <TextField label="Store Name" value={storeName} onChange={setStoreName} />
                </Card.Section>
                <Card.Section>
                  <TextField
                    label="Store Description"
                    value={storeDescription}
                    onChange={setStoreDescription}
                    multiline={3}
                  />
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Changes</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection title="Store Logo" description="Upload your store logo">
              <Card>
                <Card.Section>
                  <DropZone accept={validImageTypes} type="image" onDrop={handleDropZoneDrop}>
                    {logoPreviewMarkup}
                    {fileUpload}
                  </DropZone>
                  <Text variant="bodyMd" color="subdued">
                    Recommended size: 512x512px. Max file size: 2MB.
                  </Text>
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Logo</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}

        {selected === 1 && (
          <Layout>
            <Layout.AnnotatedSection title="Color Scheme" description="Choose a color scheme for your store">
              <Card>
                <Card.Section>
                  <Select
                    label="Color Scheme"
                    options={colorSchemeOptions}
                    value={colorScheme}
                    onChange={handleColorSchemeChange}
                  />
                  <div
                    style={{
                      marginTop: "1rem",
                      width: "100%",
                      height: "40px",
                      backgroundColor: getColorFromScheme(colorScheme),
                      borderRadius: "4px",
                    }}
                  />
                </Card.Section>
                <Card.Section>
                  <Button primary>Apply Theme</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>

            <Layout.AnnotatedSection title="Typography" description="Choose fonts for your store">
              <Card>
                <Card.Section>
                  <Select
                    label="Heading Font"
                    options={fontOptions}
                    value={headingFont}
                    onChange={handleHeadingFontChange}
                  />
                </Card.Section>
                <Card.Section>
                  <Select label="Body Font" options={fontOptions} value={bodyFont} onChange={handleBodyFontChange} />
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Typography</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}

        {selected === 2 && (
          <Layout>
            <Layout.AnnotatedSection title="Widget Settings" description="Configure widgets that appear on your store">
              <Card>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: productRecommendations ? "Disable" : "Enable",
                      onAction: () => setProductRecommendations(!productRecommendations),
                    }}
                    enabled={productRecommendations}
                  >
                    <Stack>
                      <Icon source={LayoutMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Product Recommendations</Text>
                        <Text variant="bodyMd" color="subdued">
                          Show product recommendations on product pages
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: recentlyViewed ? "Disable" : "Enable",
                      onAction: () => setRecentlyViewed(!recentlyViewed),
                    }}
                    enabled={recentlyViewed}
                  >
                    <Stack>
                      <Icon source={LayoutMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Recently Viewed</Text>
                        <Text variant="bodyMd" color="subdued">
                          Show recently viewed products
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
                          Display customer reviews on product pages
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <SettingToggle
                    action={{
                      content: socialMediaIcons ? "Disable" : "Enable",
                      onAction: () => setSocialMediaIcons(!socialMediaIcons),
                    }}
                    enabled={socialMediaIcons}
                  >
                    <Stack>
                      <Icon source={SocialMediaMajor} color="base" />
                      <Stack vertical spacing="extraTight">
                        <Text variant="headingMd">Social Media Icons</Text>
                        <Text variant="bodyMd" color="subdued">
                          Show social media icons in the footer
                        </Text>
                      </Stack>
                    </Stack>
                  </SettingToggle>
                </Card.Section>
                <Card.Section>
                  <Button primary>Save Widget Settings</Button>
                </Card.Section>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        )}
      </Page>
    </AppLayout>
  )
}

function getColorFromScheme(scheme: string): string {
  switch (scheme) {
    case "blue":
      return "#3b82f6"
    case "green":
      return "#10b981"
    case "purple":
      return "#8b5cf6"
    case "red":
      return "#ef4444"
    case "orange":
      return "#f97316"
    default:
      return "#3b82f6"
  }
}

// Import missing icons
import { StarOutlineMajor, SocialMediaMajor } from "@shopify/polaris-icons"

