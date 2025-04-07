import {
  createHotContext
} from "/build/_shared/chunk-32SYWZLB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Charts.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Charts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Charts.tsx"
  );
  import.meta.hot.lastModified = "1742543212726.8628";
}
function BarChart({
  data
}) {
  _s();
  const canvasRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!canvasRef.current)
      return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const maxValue = Math.max(...data.map((item) => item.value));
    const barWidth = chartWidth / data.length - 10;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
    data.forEach((item, index) => {
      const x = padding + index * (barWidth + 10) + 5;
      const barHeight = item.value / maxValue * chartHeight;
      const y = height - padding - barHeight;
      ctx.fillStyle = "#5c6ac4";
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.fillStyle = "#637381";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.name, x + barWidth / 2, height - padding + 15);
      ctx.fillStyle = "#212b36";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5);
    });
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { ref: canvasRef, width: 600, height: 300, style: {
    width: "100%",
    height: "100%"
  } }, void 0, false, {
    fileName: "app/components/Charts.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s(BarChart, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = BarChart;
function LineChart({
  data
}) {
  _s2();
  const canvasRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!canvasRef.current)
      return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const maxValue = Math.max(...data.map((item) => item.value));
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
    ctx.beginPath();
    data.forEach((item, index) => {
      const x = padding + index / (data.length - 1) * chartWidth;
      const y = height - padding - item.value / maxValue * chartHeight;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = "#5c6ac4";
    ctx.lineWidth = 2;
    2;
    ctx.stroke();
    data.forEach((item, index) => {
      const x = padding + index / (data.length - 1) * chartWidth;
      const y = height - padding - item.value / maxValue * chartHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#5c6ac4";
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#637381";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.name, x, height - padding + 15);
      ctx.fillStyle = "#212b36";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(item.value.toString(), x, y - 10);
    });
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", { ref: canvasRef, width: 600, height: 300, style: {
    width: "100%",
    height: "100%"
  } }, void 0, false, {
    fileName: "app/components/Charts.tsx",
    lineNumber: 161,
    columnNumber: 10
  }, this);
}
_s2(LineChart, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c2 = LineChart;
var _c;
var _c2;
$RefreshReg$(_c, "BarChart");
$RefreshReg$(_c2, "LineChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BarChart,
  LineChart
};
//# sourceMappingURL=/build/_shared/chunk-MLO7M5IR.js.map
