import {
  AppLayout,
  SvgChevronDownMinor,
  SvgChevronUpMinor,
  SvgDeleteMinor,
  SvgEditMinor,
  SvgPlusMinor,
  SvgSaveMinor
} from "/build/_shared/chunk-KMAY4TI5.js";
import {
  Button,
  Card,
  Collapsible,
  Layout,
  Page,
  Stack,
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

// app/routes/faqs.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\faqs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\faqs.tsx"
  );
  import.meta.hot.lastModified = "1744003849189.3684";
}
function FAQs() {
  _s();
  const [faqs, setFaqs] = (0, import_react.useState)([{
    id: 1,
    question: "How do I install the app?",
    answer: "You can install our app directly from the Shopify App Store. Simply search for our app name and click 'Add app'.",
    editing: false,
    expanded: false
  }, {
    id: 2,
    question: "How do I connect my store?",
    answer: "After installation, you'll be prompted to authorize the app with your Shopify store. Follow the on-screen instructions to complete the connection.",
    editing: false,
    expanded: false
  }, {
    id: 3,
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.",
    editing: false,
    expanded: false
  }]);
  const [newFaq, setNewFaq] = (0, import_react.useState)({
    question: "",
    answer: ""
  });
  const handleNewQuestionChange = (0, import_react.useCallback)((value) => setNewFaq({
    ...newFaq,
    question: value
  }), [newFaq]);
  const handleNewAnswerChange = (0, import_react.useCallback)((value) => setNewFaq({
    ...newFaq,
    answer: value
  }), [newFaq]);
  const addFaq = (0, import_react.useCallback)(() => {
    if (newFaq.question.trim() === "" || newFaq.answer.trim() === "")
      return;
    setFaqs([...faqs, {
      id: Date.now(),
      question: newFaq.question,
      answer: newFaq.answer,
      editing: false,
      expanded: false
    }]);
    setNewFaq({
      question: "",
      answer: ""
    });
  }, [faqs, newFaq]);
  const deleteFaq = (0, import_react.useCallback)((id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  }, [faqs]);
  const toggleEdit = (0, import_react.useCallback)((id) => {
    setFaqs(faqs.map((faq) => faq.id === id ? {
      ...faq,
      editing: !faq.editing
    } : faq));
  }, [faqs]);
  const toggleExpand = (0, import_react.useCallback)((id) => {
    setFaqs(faqs.map((faq) => faq.id === id ? {
      ...faq,
      expanded: !faq.expanded
    } : faq));
  }, [faqs]);
  const updateFaq = (0, import_react.useCallback)((id, data) => {
    setFaqs(faqs.map((faq) => faq.id === id ? {
      ...faq,
      ...data
    } : faq));
  }, [faqs]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "FAQs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Manage FAQs", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Create and edit frequently asked questions for your customers" }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 101,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this),
      faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { distribution: "equalSpacing", alignment: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack.Item, { fill: true, children: faq.editing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { value: faq.question, onChange: (value) => updateFaq(faq.id, {
            question: value
          }) }, void 0, false, {
            fileName: "app/routes/faqs.tsx",
            lineNumber: 109,
            columnNumber: 38
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { plain: true, onClick: () => toggleExpand(faq.id), icon: faq.expanded ? SvgChevronUpMinor : SvgChevronDownMinor, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: faq.question }, void 0, false, {
            fileName: "app/routes/faqs.tsx",
            lineNumber: 112,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/faqs.tsx",
            lineNumber: 111,
            columnNumber: 28
          }, this) }, void 0, false, {
            fileName: "app/routes/faqs.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: "tight", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { plain: true, icon: faq.editing ? SvgSaveMinor : SvgEditMinor, onClick: () => toggleEdit(faq.id) }, void 0, false, {
              fileName: "app/routes/faqs.tsx",
              lineNumber: 116,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { plain: true, icon: SvgDeleteMinor, onClick: () => deleteFaq(faq.id) }, void 0, false, {
              fileName: "app/routes/faqs.tsx",
              lineNumber: 117,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/faqs.tsx",
            lineNumber: 115,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/faqs.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: faq.expanded || faq.editing, id: `faq-${faq.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          marginTop: "1rem"
        }, children: faq.editing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { value: faq.answer, onChange: (value) => updateFaq(faq.id, {
          answer: value
        }), multiline: 4 }, void 0, false, {
          fileName: "app/routes/faqs.tsx",
          lineNumber: 125,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", children: faq.answer }, void 0, false, {
          fileName: "app/routes/faqs.tsx",
          lineNumber: 127,
          columnNumber: 42
        }, this) }, void 0, false, {
          fileName: "app/routes/faqs.tsx",
          lineNumber: 122,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/faqs.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this)
      ] }, faq.id, true, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 106,
        columnNumber: 32
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/faqs.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/faqs.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { title: "Add New FAQ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "bodyMd", color: "subdued", children: "Create a new frequently asked question" }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 136,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Question", value: newFaq.question, onChange: handleNewQuestionChange, placeholder: "Enter the question" }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Answer", value: newFaq.answer, onChange: handleNewAnswerChange, placeholder: "Enter the answer", multiline: 4 }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 145,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, icon: SvgPlusMinor, onClick: addFaq, children: "Add FAQ" }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 148,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/faqs.tsx",
        lineNumber: 147,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/faqs.tsx",
      lineNumber: 135,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/faqs.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/faqs.tsx",
    lineNumber: 97,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/faqs.tsx",
    lineNumber: 96,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/faqs.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_s(FAQs, "hPedgfcIQh9c6YAcIAElrjLDDA4=");
_c = FAQs;
var _c;
$RefreshReg$(_c, "FAQs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FAQs as default
};
//# sourceMappingURL=/build/routes/faqs-LJM42BWZ.js.map
