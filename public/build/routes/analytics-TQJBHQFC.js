import {
  BarChart,
  LineChart
} from "/build/_shared/chunk-MLO7M5IR.js";
import {
  AppLayout,
  SvgAnalyticsMajor,
  SvgArrowDownMinor,
  SvgArrowUpMinor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Card,
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

// app/routes/analytics.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\analytics.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\analytics.tsx"
  );
  import.meta.hot.lastModified = "1743995602061.8103";
}
function Analytics() {
  _s();
  const [selected, setSelected] = (0, import_react.useState)(0);
  const handleTabChange = (selectedTabIndex) => setSelected(selectedTabIndex);
  const analyticsData = {
    queriesOverTime: [{
      name: "Mar 09",
      value: 18
    }, {
      name: "Mar 10",
      value: 22
    }, {
      name: "Mar 11",
      value: 27
    }, {
      name: "Mar 12",
      value: 33
    }, {
      name: "Mar 13",
      value: 30
    }, {
      name: "Mar 14",
      value: 38
    }, {
      name: "Mar 15",
      value: 42
    }, {
      name: "Mar 16",
      value: 48
    }],
    userGrowth: [{
      name: "Dec 2024",
      value: 40
    }, {
      name: "Jan 2025",
      value: 60
    }, {
      name: "Feb 2025",
      value: 85
    }, {
      name: "Mar 2025",
      value: 110
    }],
    responseTimes: {
      average: 2.3,
      trend: "down",
      peak: 3.8
    },
    conversionRate: {
      value: 4.5,
      trend: "up"
    },
    totalMetrics: {
      queries: 258,
      activeUsers: 92,
      sessions: 315
    }
  };
  const tabs = [{
    id: "all",
    content: "All Time"
  }, {
    id: "month",
    content: "This Month"
  }, {
    id: "week",
    content: "This Week"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Analytics", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { tabs, selected, onSelect: handleTabChange }, void 0, false, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneThird: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Total Queries" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: analyticsData.totalMetrics.queries }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 106,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+18% from last month" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneThird: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Active Users" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 125,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: analyticsData.totalMetrics.activeUsers }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 126,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 124,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 128,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 131,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+12% from last month" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 130,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneThird: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Total Sessions" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: analyticsData.totalMetrics.sessions }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgAnalyticsMajor, color: "base" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 151,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+15% from last month" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 152,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 150,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Queries Over Time", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Daily query volume for the past week" }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          height: "300px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart, { data: analyticsData.queriesOverTime }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 162,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 161,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "User Growth", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Monthly user growth" }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 178,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          height: "300px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, { data: analyticsData.userGrowth }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 184,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 177,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Response Times", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Average response time metrics" }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "tight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Average" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 199,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: [
              analyticsData.responseTimes.average,
              "s"
            ] }, void 0, true, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 202,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowDownMinor, color: "success" }, void 0, false, {
                fileName: "app/routes/analytics.tsx",
                lineNumber: 204,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "-0.2s from last month" }, void 0, false, {
                fileName: "app/routes/analytics.tsx",
                lineNumber: 205,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 203,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 198,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 197,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "tight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Peak" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 213,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", children: [
              analyticsData.responseTimes.peak,
              "s"
            ] }, void 0, true, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 216,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowDownMinor, color: "success" }, void 0, false, {
                fileName: "app/routes/analytics.tsx",
                lineNumber: 218,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "-0.5s from last month" }, void 0, false, {
                fileName: "app/routes/analytics.tsx",
                lineNumber: 219,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 217,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 211,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 196,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 192,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { oneHalf: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Conversion Rate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Percentage of users who complete a desired action" }, void 0, false, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 233,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "tight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingXl", children: [
            analyticsData.conversionRate.value,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 237,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", alignment: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgArrowUpMinor, color: "success" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 239,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", color: "success", children: "+0.8% from last month" }, void 0, false, {
              fileName: "app/routes/analytics.tsx",
              lineNumber: 240,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 238,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Your conversion rate is above the industry average of 3.2%" }, void 0, false, {
            fileName: "app/routes/analytics.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics.tsx",
          lineNumber: 236,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 232,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 231,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/analytics.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 97,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/analytics.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s(Analytics, "gGT9ux4E8pnUkSZL1bYkDrfRDO0=");
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/analytics-TQJBHQFC.js.map
