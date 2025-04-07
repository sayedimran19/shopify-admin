import {
  BarChart,
  LineChart
} from "/build/_shared/chunk-MLO7M5IR.js";
import {
  AppLayout,
  SvgAnalyticsMajor,
  SvgArrowDownMinor,
  SvgArrowUpMinor,
  SvgClockMajor,
  SvgCustomersMajor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Card,
  DataTable,
  Icon,
  Layout,
  Page,
  Stack,
  Tabs,
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1744003632678.257";
}
function Dashboard() {
  _s();
  const [selected, setSelected] = (0, import_react.useState)(0);
  const handleTabChange = (selectedTabIndex) => setSelected(selectedTabIndex);
  const dashboardData = {
    queriesToday: 15,
    totalUsers: 100,
    activeUsersToday: 20,
    avgResponseTime: 2.5,
    recentQueries: [{
      id: 1,
      user: "John Doe",
      query: "How to add products?",
      time: "5 min ago"
    }, {
      id: 2,
      user: "Jane Smith",
      query: "Setting up shipping",
      time: "15 min ago"
    }, {
      id: 3,
      user: "Mike Johnson",
      query: "Payment integration",
      time: "30 min ago"
    }, {
      id: 4,
      user: "Sarah Williams",
      query: "Customer support",
      time: "1 hour ago"
    }]
  };
  const weeklyData = [{
    name: "Mon",
    value: 12
  }, {
    name: "Tue",
    value: 18
  }, {
    name: "Wed",
    value: 15
  }, {
    name: "Thu",
    value: 22
  }, {
    name: "Fri",
    value: 20
  }, {
    name: "Sat",
    value: 17
  }, {
    name: "Sun",
    value: 15
  }];
  const userActivityData = [{
    name: "Week 1",
    value: 40
  }, {
    name: "Week 2",
    value: 45
  }, {
    name: "Week 3",
    value: 55
  }, {
    name: "Week 4",
    value: 60
  }];
  const tabs = [{
    id: "overview",
    content: "Overview"
  }, {
    id: "analytics",
    content: "Analytics"
  }, {
    id: "reports",
    content: "Reports"
  }];
  const rows = dashboardData.recentQueries.map((query) => [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { alignment: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Avatar, { customer: true, name: query.user }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", fontWeight: "bold", children: query.user }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "subdued", children: query.query }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, query.id, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 104,
    columnNumber: 58
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "subdued", children: query.time }, query.id, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 114,
    columnNumber: 15
  }, this)]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Dashboard", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { tabs, selected, onSelect: handleTabChange }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 119,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Queries Today" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 126,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: dashboardData.queriesToday }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 127,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+12% from yesterday" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 133,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Total Users" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: dashboardData.totalUsers }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCustomersMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+5% from last week" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Active Users Today" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 166,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: dashboardData.activeUsersToday }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 165,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCustomersMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 164,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+8% from yesterday" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 173,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 171,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 163,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Avg. Response Time" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: [
              dashboardData.avgResponseTime,
              "s"
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 187,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 185,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgClockMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 189,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 184,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowDownMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 192,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "-0.3s from last week" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 193,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Queries Overview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Daily query volume for the past week" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          height: "300px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, { data: weeklyData }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 210,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 207,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 203,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { secondary: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "User Activity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Weekly active users" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 219,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          height: "300px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: userActivityData }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 222,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 218,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Recent Queries", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, { columnContentTypes: ["text", "text"], headings: ["User", "Time"], rows }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 234,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 233,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 232,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "gGT9ux4E8pnUkSZL1bYkDrfRDO0=");
_c = Dashboard;
function Avatar({
  customer,
  name
}) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    backgroundColor: "#5c6ac4",
    color: "white",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  }, children: initials }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 249,
    columnNumber: 10
  }, this);
}
_c2 = Avatar;
var _c;
var _c2;
$RefreshReg$(_c, "Dashboard");
$RefreshReg$(_c2, "Avatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/_index-RQQCPRDD.js.map
