import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { AppProvider } from "@shopify/polaris"
import "@shopify/polaris/build/esm/styles.css"
import enTranslations from "@shopify/polaris/locales/en.json"

export const meta: MetaFunction = () => {
  return [
    { title: "Shopify Admin Dashboard" },
    { name: "description", content: "Admin dashboard for your Shopify app" },
  ]
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "@shopify/polaris/build/esm/styles.css" }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppProvider i18n={enTranslations}>
          <Outlet />
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

