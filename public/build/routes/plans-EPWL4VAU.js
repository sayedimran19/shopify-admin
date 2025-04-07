import {
  AppLayout,
  SvgChecklistMajor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Badge,
  Button,
  Card,
  Icon,
  Layout,
  Page,
  Stack,
  Text
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/plans.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\plans.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\plans.tsx"
  );
  import.meta.hot.lastModified = "1743994687882.0862";
}
function Plans() {
  const plans = [{
    name: "Free",
    price: "$0",
    description: "Basic features for small stores",
    features: ["Up to 100 queries per month", "Basic analytics", "Email support", "1 user account"],
    current: false,
    popular: false
  }, {
    name: "Starter",
    price: "$19",
    description: "Everything in Free plus more features",
    features: ["Up to 1,000 queries per month", "Advanced analytics", "Priority email support", "3 user accounts", "Custom branding"],
    current: false,
    popular: true
  }, {
    name: "Premium",
    price: "$49",
    description: "Professional features for growing businesses",
    features: ["Up to 5,000 queries per month", "Advanced analytics with exports", "Priority email & chat support", "10 user accounts", "Custom branding", "API access", "Webhooks"],
    current: true,
    popular: false
  }, {
    name: "Enterprise",
    price: "$199",
    description: "Advanced features for large businesses",
    features: ["Unlimited queries", "Advanced analytics with exports", "24/7 phone, email & chat support", "Unlimited user accounts", "Custom branding", "API access", "Webhooks", "Dedicated account manager", "Custom integrations"],
    current: false,
    popular: false
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Subscription Plans", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    plans.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneQuarter: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: plan.name }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this),
        plan.popular && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { status: "info", children: "Popular" }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 62,
          columnNumber: 38
        }, this),
        plan.current && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { status: "success", children: "Current" }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 63,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 60,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "tight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingXl", children: plan.price }, void 0, false, {
            fileName: "app/routes/plans.tsx",
            lineNumber: 68,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "/month" }, void 0, false, {
            fileName: "app/routes/plans.tsx",
            lineNumber: 69,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: plan.description }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { title: "Features", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, children: plan.features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { alignment: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgChecklistMajor, color: "success" }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 80,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", children: feature }, void 0, false, {
          fileName: "app/routes/plans.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this)
      ] }, feature, true, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 79,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: plan.current ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disabled: true, children: "Current Plan" }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 86,
        columnNumber: 35
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, primary: plan.popular, children: plan.name === "Free" ? "Get Started" : "Upgrade" }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 88,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/plans.tsx",
      lineNumber: 58,
      columnNumber: 15
    }, this) }, plan.name, false, {
      fileName: "app/routes/plans.tsx",
      lineNumber: 57,
      columnNumber: 30
    }, this)),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Need a custom plan?", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", children: "Contact our sales team for a custom solution tailored to your specific needs" }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { outline: true, children: "Contact Sales" }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/plans.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/plans.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/plans.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/plans.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/plans.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/plans.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_c = Plans;
var _c;
$RefreshReg$(_c, "Plans");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Plans as default
};
//# sourceMappingURL=/build/routes/plans-EPWL4VAU.js.map
