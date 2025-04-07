import type { LinksFunction, MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { AppProvider } from "@shopify/polaris";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Import your CSS file
import polarisStyles from "./styles/polaris.css";


export const meta: MetaFunction = () => {
  return [
    { title: "Shopify Admin Dashboard" },
    { name: "description", content: "Admin dashboard for your Shopify app" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: polarisStyles }];
};

export async function loader({}: LoaderFunctionArgs) {
  const enTranslations = await import("@shopify/polaris/locales/en.json", {
    assert: { type: "json" }, // Works in Node.js v20+
  });
  return json({ translations: enTranslations.default });
}

export default function App() {
  const { translations } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppProvider i18n={translations}>
          <Outlet />
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}