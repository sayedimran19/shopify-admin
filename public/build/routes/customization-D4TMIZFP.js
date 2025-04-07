import {
  AppLayout,
  SvgPageMajor,
  SvgSocialAdMajor,
  SvgStarOutlineMinor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Button,
  Card,
  DropZone,
  Icon,
  Layout,
  Page,
  Select,
  SettingToggle,
  Stack,
  Tabs,
  Text,
  TextField,
  Thumbnail
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

// app/routes/customization.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\customization.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\customization.tsx"
  );
  import.meta.hot.lastModified = "1744004001113.1755";
}
function Customization() {
  _s();
  const [selected, setSelected] = (0, import_react.useState)(0);
  const [storeName, setStoreName] = (0, import_react.useState)("My Awesome Store");
  const [storeDescription, setStoreDescription] = (0, import_react.useState)("The best products for your needs");
  const [colorScheme, setColorScheme] = (0, import_react.useState)("blue");
  const [logoFile, setLogoFile] = (0, import_react.useState)(null);
  const [logoPreview, setLogoPreview] = (0, import_react.useState)("/placeholder.svg");
  const [headingFont, setHeadingFont] = (0, import_react.useState)("inter");
  const [bodyFont, setBodyFont] = (0, import_react.useState)("inter");
  const [productRecommendations, setProductRecommendations] = (0, import_react.useState)(true);
  const [recentlyViewed, setRecentlyViewed] = (0, import_react.useState)(true);
  const [customerReviews, setCustomerReviews] = (0, import_react.useState)(true);
  const [socialMediaIcons, setSocialMediaIcons] = (0, import_react.useState)(false);
  const handleTabChange = (0, import_react.useCallback)((selectedTabIndex) => setSelected(selectedTabIndex), []);
  const handleDropZoneDrop = (0, import_react.useCallback)((_dropFiles, acceptedFiles, _rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);
  const handleColorSchemeChange = (0, import_react.useCallback)((value) => setColorScheme(value), []);
  const handleHeadingFontChange = (0, import_react.useCallback)((value) => setHeadingFont(value), []);
  const handleBodyFontChange = (0, import_react.useCallback)((value) => setBodyFont(value), []);
  const colorSchemeOptions = [{
    label: "Blue",
    value: "blue"
  }, {
    label: "Green",
    value: "green"
  }, {
    label: "Purple",
    value: "purple"
  }, {
    label: "Red",
    value: "red"
  }, {
    label: "Orange",
    value: "orange"
  }];
  const fontOptions = [{
    label: "Inter",
    value: "inter"
  }, {
    label: "Roboto",
    value: "roboto"
  }, {
    label: "Open Sans",
    value: "opensans"
  }, {
    label: "Montserrat",
    value: "montserrat"
  }, {
    label: "Lato",
    value: "lato"
  }];
  const tabs = [{
    id: "branding",
    content: "Branding",
    panelID: "branding-content"
  }, {
    id: "appearance",
    content: "Appearance",
    panelID: "appearance-content"
  }, {
    id: "widgets",
    content: "Widgets",
    panelID: "widgets-content"
  }];
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const fileUpload = !logoFile && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropZone.FileUpload, { actionHint: "or drop files to upload" }, void 0, false, {
    fileName: "app/routes/customization.tsx",
    lineNumber: 102,
    columnNumber: 35
  }, this);
  const logoPreviewMarkup = logoFile && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Thumbnail, { size: "large", alt: logoFile.name, source: logoPreview }, void 0, false, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      logoFile.name,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodySm", as: "p", children: [
        logoFile.size,
        " bytes"
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/customization.tsx",
    lineNumber: 103,
    columnNumber: 41
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Customization", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, { tabs, selected, onSelect: handleTabChange }, void 0, false, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    selected === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Store Information", description: "Customize your store's basic information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Store Name", value: storeName, onChange: setStoreName }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 120,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Store Description", value: storeDescription, onChange: setStoreDescription, multiline: 3 }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 123,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 122,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Changes" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 126,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Store Logo", description: "Upload your store logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropZone, { accept: validImageTypes, type: "image", onDrop: handleDropZoneDrop, children: [
            logoPreviewMarkup,
            fileUpload
          ] }, void 0, true, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Recommended size: 512x512px. Max file size: 2MB." }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Logo" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 143,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 131,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 116,
      columnNumber: 28
    }, this),
    selected === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Color Scheme", description: "Choose a color scheme for your store", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Color Scheme", options: colorSchemeOptions, value: colorScheme, onChange: handleColorSchemeChange }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 153,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginTop: "1rem",
            width: "100%",
            height: "40px",
            backgroundColor: getColorFromScheme(colorScheme),
            borderRadius: "4px"
          } }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 154,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 152,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Apply Theme" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 163,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 151,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Typography", description: "Choose fonts for your store", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Heading Font", options: fontOptions, value: headingFont, onChange: handleHeadingFontChange }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 171,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Body Font", options: fontOptions, value: bodyFont, onChange: handleBodyFontChange }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 174,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Typography" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 177,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 169,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 149,
      columnNumber: 28
    }, this),
    selected === 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.AnnotatedSection, { title: "Widget Settings", description: "Configure widgets that appear on your store", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
        content: productRecommendations ? "Disable" : "Enable",
        onAction: () => setProductRecommendations(!productRecommendations)
      }, enabled: productRecommendations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgPageMajor, color: "base" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 192,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Product Recommendations" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 194,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Show product recommendations on product pages" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 195,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 193,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 191,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 187,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 186,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
        content: recentlyViewed ? "Disable" : "Enable",
        onAction: () => setRecentlyViewed(!recentlyViewed)
      }, enabled: recentlyViewed, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgPageMajor, color: "base" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 208,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Recently Viewed" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 210,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Show recently viewed products" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 211,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 209,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 207,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 203,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 202,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
        content: customerReviews ? "Disable" : "Enable",
        onAction: () => setCustomerReviews(!customerReviews)
      }, enabled: customerReviews, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgStarOutlineMinor, color: "base" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 224,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Customer Reviews" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 226,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Display customer reviews on product pages" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 227,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 225,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 223,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 219,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 218,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingToggle, { action: {
        content: socialMediaIcons ? "Disable" : "Enable",
        onAction: () => setSocialMediaIcons(!socialMediaIcons)
      }, enabled: socialMediaIcons, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgSocialAdMajor, color: "base" }, void 0, false, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 240,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { vertical: true, spacing: "extraTight", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Social Media Icons" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 242,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Show social media icons in the footer" }, void 0, false, {
            fileName: "app/routes/customization.tsx",
            lineNumber: 243,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/customization.tsx",
          lineNumber: 241,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 239,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 235,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 234,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, children: "Save Widget Settings" }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 251,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/customization.tsx",
        lineNumber: 250,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 185,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 184,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/customization.tsx",
      lineNumber: 183,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/customization.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/customization.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}
_s(Customization, "QY+YgULQX5n5PreIyfpT0WEw46I=");
_c = Customization;
function getColorFromScheme(scheme) {
  switch (scheme) {
    case "blue":
      return "#3b82f6";
    case "green":
      return "#10b981";
    case "purple":
      return "#8b5cf6";
    case "red":
      return "#ef4444";
    case "orange":
      return "#f97316";
    default:
      return "#3b82f6";
  }
}
var _c;
$RefreshReg$(_c, "Customization");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Customization as default
};
//# sourceMappingURL=/build/routes/customization-D4TMIZFP.js.map
