import {
  AppLayout,
  SvgAnalyticsMajor,
  SvgClipboardMinor,
  SvgDuplicateMinor,
  SvgEmailMajor,
  SvgInventoryMajor,
  SvgNotificationMajor,
  SvgOrderStatusMinor,
  SvgOrdersMajor,
  SvgSecureMajor,
  SvgStarOutlineMinor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Badge,
  Button,
  Card,
  Icon,
  Layout,
  Page,
  SettingToggle,
  Stack,
  Tabs,
  Text,
  TextField
} from "/build/_shared/chunk-4DMPU7RK.js";
import "/build/_shared/chunk-P6FD7TGK.js";
import {
  createHotContext
} from "/build/_shared/chunk-32SYWZLB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/settings.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\settings.tsx"
  );
  import.meta.hot.lastModified = "1744006170344.0063";
}
function Settings() {
  _s();
  const [selected, setSelected] = (0, import_react.useState)(0);
  const [name, setName] = (0, import_react.useState)("John Doe");
  const [email, setEmail] = (0, import_react.useState)("john@example.com");
  const [company, setCompany] = (0, import_react.useState)("Acme Inc.");
  const [apiKey, setApiKey] = (0, import_react.useState)("sk_test_shopify_123456789");
  const [webhookUrl, setWebhookUrl] = (0, import_react.useState)("https://your-app.com/api/webhook");
  const [emailNotifications, setEmailNotifications] = (0, import_react.useState)(true);
  const [pushNotifications, setPushNotifications] = (0, import_react.useState)(true);
  const [weeklyReports, setWeeklyReports] = (0, import_react.useState)(false);
  const [newOrders, setNewOrders] = (0, import_react.useState)(true);
  const [orderStatusUpdates, setOrderStatusUpdates] = (0, import_react.useState)(true);
  const [lowInventoryAlerts, setLowInventoryAlerts] = (0, import_react.useState)(true);
  const [customerReviews, setCustomerReviews] = (0, import_react.useState)(false);
  const [securityAlerts, setSecurityAlerts] = (0, import_react.useState)(true);
  const [startTime, setStartTime] = (0, import_react.useState)("22:00");
  const [endTime, setEndTime] = (0, import_react.useState)("08:00");
  const [copied, setCopied] = (0, import_react.useState)(false);
  const handleTabChange = (0, import_react.useCallback)((selectedTabIndex) => setSelected(selectedTabIndex), []);
  const copyToClipboard = (0, import_react.useCallback)(() => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  }, [apiKey]);
  const tabs = [{
    id: "general",
    content: "General",
    panelID: "general-content"
  }, {
    id: "api",
    content: "API",
    panelID: "api-content"
  }, {
    id: "notifications",
    content: "Notifications",
    panelID: "notifications-content"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Settings", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { tabs, selected, onSelect: handleTabChange }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    selected === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Account Information", description: "Manage your account details and preferences", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Name", value: name, onChange: setName, autoComplete: "name" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Email", value: email, onChange: setEmail, autoComplete: "email", type: "email" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Company", value: company, onChange: setCompany, autoComplete: "organization" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Changes" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Current Plan", description: "Your current subscription plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Premium Plan" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 93,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "$29/month, billed monthly" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 94,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 92,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { status: "success", children: "Active" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Your next billing date is April 20, 2025" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 102,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { outline: true, children: "Cancel Subscription" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, url: "/plans", children: "Change Plan" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 109,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 70,
      columnNumber: 28
    }, this),
    selected === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "API Keys", description: "Manage your API keys for integration with your Shopify store", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "API Key", value: apiKey, onChange: setApiKey, readOnly: true, connectedRight: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: copyToClipboard, icon: copied ? SvgDuplicateMinor : SvgClipboardMinor, children: copied ? "Copied" : "Copy" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 122,
          columnNumber: 107
        }, this), monospaced: true }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 122,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "This key gives access to your Shopify store data. Keep it secure." }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 125,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Webhook URL", value: webhookUrl, onChange: setWebhookUrl, readOnly: true }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 130,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Regenerate API Key" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 133,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 132,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 120,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 119,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 118,
      columnNumber: 28
    }, this),
    selected === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Notification Settings", description: "Configure how you receive notifications", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: emailNotifications ? "Disable" : "Enable",
          onAction: () => setEmailNotifications(!emailNotifications)
        }, enabled: emailNotifications, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgEmailMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 148,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Email Notifications" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 150,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Receive notifications via email" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 151,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 149,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 147,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 143,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: pushNotifications ? "Disable" : "Enable",
          onAction: () => setPushNotifications(!pushNotifications)
        }, enabled: pushNotifications, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgNotificationMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 164,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Push Notifications" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 166,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Receive push notifications in the app" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 167,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 165,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 163,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 159,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 158,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: weeklyReports ? "Disable" : "Enable",
          onAction: () => setWeeklyReports(!weeklyReports)
        }, enabled: weeklyReports, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 180,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Weekly Reports" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 182,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Receive weekly summary reports" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 183,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 181,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 179,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 175,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 174,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Preferences" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 191,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 190,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Push Notifications", description: "Configure push notification preferences for your app", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: newOrders ? "Disable" : "Enable",
          onAction: () => setNewOrders(!newOrders)
        }, enabled: newOrders, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgOrdersMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 204,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "New Orders" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 206,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Get notified when you receive a new order" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 207,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 205,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 203,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 199,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 198,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: orderStatusUpdates ? "Disable" : "Enable",
          onAction: () => setOrderStatusUpdates(!orderStatusUpdates)
        }, enabled: orderStatusUpdates, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgOrderStatusMinor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 220,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Order Status Updates" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 222,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Get notified when an order status changes" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 223,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 221,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 219,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 215,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: lowInventoryAlerts ? "Disable" : "Enable",
          onAction: () => setLowInventoryAlerts(!lowInventoryAlerts)
        }, enabled: lowInventoryAlerts, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgInventoryMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 236,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Low Inventory Alerts" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 238,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Get notified when product inventory is low" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 239,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 237,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 235,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 231,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 230,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: customerReviews ? "Disable" : "Enable",
          onAction: () => setCustomerReviews(!customerReviews)
        }, enabled: customerReviews, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgStarOutlineMinor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 252,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Customer Reviews" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 254,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Get notified when you receive a new customer review" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 255,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 253,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 251,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 247,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 246,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
          content: securityAlerts ? "Disable" : "Enable",
          onAction: () => setSecurityAlerts(!securityAlerts)
        }, enabled: securityAlerts, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgSecureMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 268,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Security Alerts" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 270,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Get notified about important security events" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 271,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 269,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 267,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 263,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 262,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { title: "Quiet Hours", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "fillEvenly", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Start Time", type: "time", value: startTime, onChange: setStartTime }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 280,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "End Time", type: "time", value: endTime, onChange: setEndTime }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 281,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 279,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "During quiet hours, you'll only receive critical notifications" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 283,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 278,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Notification Settings" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 288,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 197,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 139,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_s(Settings, "FyJ19T5Eh465ltjOkpOkD+29Zl0=");
_c = Settings;
var _c;
$RefreshReg$(_c, "Settings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Settings as default
};
//# sourceMappingURL=/build/routes/settings-G245ZYBF.js.map
