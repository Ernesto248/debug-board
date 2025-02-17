'use strict';

var React = require('react');
var framerMotion = require('framer-motion');
var md = require('react-icons/md');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.debug-board .pointer-events-none{pointer-events:none}.debug-board .visible{visibility:visible}.debug-board .fixed{position:fixed}.debug-board .bottom-4{bottom:1rem}.debug-board .right-4{right:1rem}.debug-board .mt-1{margin-top:.25rem}.debug-board .mt-2{margin-top:.5rem}.debug-board .flex{display:flex}.debug-board .hidden{display:none}.debug-board .max-h-\\[400px\\]{max-height:400px}.debug-board .max-h-\\[500px\\]{max-height:500px}.debug-board .cursor-pointer{cursor:pointer}.debug-board .items-center{align-items:center}.debug-board .justify-between{justify-content:space-between}.debug-board .gap-1{gap:.25rem}.debug-board .gap-2{gap:.5rem}.debug-board :is(.space-y-2>:not([hidden])~:not([hidden])){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.debug-board .overflow-hidden{overflow:hidden}.debug-board .overflow-y-auto{overflow-y:auto}.debug-board .whitespace-pre-wrap{white-space:pre-wrap}.debug-board .rounded{border-radius:.25rem}.debug-board .rounded-full{border-radius:9999px}.debug-board .rounded-lg{border-radius:.5rem}.debug-board .rounded-md{border-radius:.375rem}.debug-board .border-b{border-bottom-width:1px}.debug-board .border-l-2{border-left-width:2px}.debug-board .border-none{border-style:none}.debug-board .border-gray-700{--tw-border-opacity:1;border-color:rgb(55 65 81/var(--tw-border-opacity,1))}.debug-board .border-green-500{--tw-border-opacity:1;border-color:rgb(34 197 94/var(--tw-border-opacity,1))}.debug-board .border-red-500{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity,1))}.debug-board .border-yellow-500{--tw-border-opacity:1;border-color:rgb(234 179 8/var(--tw-border-opacity,1))}.debug-board .bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.debug-board .bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.debug-board .bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.debug-board .bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1))}.debug-board .p-1{padding:.25rem}.debug-board .p-3{padding:.75rem}.debug-board .p-8{padding:2rem}.debug-board .px-2{padding-left:.5rem;padding-right:.5rem}.debug-board .px-3{padding-left:.75rem;padding-right:.75rem}.debug-board .py-0\\.5{padding-bottom:.125rem;padding-top:.125rem}.debug-board .py-1{padding-bottom:.25rem;padding-top:.25rem}.debug-board .text-center{text-align:center}.debug-board .font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.debug-board .text-base{font-size:1rem;line-height:1.5rem}.debug-board .text-sm{font-size:.875rem;line-height:1.25rem}.debug-board .text-xs{font-size:.75rem;line-height:1rem}.debug-board .font-bold{font-weight:700}.debug-board .text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.debug-board .text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.debug-board .text-green-400{--tw-text-opacity:1;color:rgb(74 222 128/var(--tw-text-opacity,1))}.debug-board .text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.debug-board .text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.debug-board .text-yellow-400{--tw-text-opacity:1;color:rgb(250 204 21/var(--tw-text-opacity,1))}.debug-board .shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.debug-board .filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.debug-board .transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.debug-board .transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.debug-board .duration-200{transition-duration:.2s}.debug-board .hover\\:bg-gray-600:hover{--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity,1))}.debug-board .hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.debug-board .hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}";
styleInject(css_248z$1);

var css_248z = ".debug-board-root{--tw-bg-opacity:1;--tw-text-opacity:1;--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:rgb(17 24 39/var(--tw-bg-opacity,1));border-radius:.5rem;bottom:1rem;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:rgb(255 255 255/var(--tw-text-opacity,1));overflow:hidden;position:fixed;right:1rem}.debug-board-minimized{transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.debug-board-minimized:hover{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.debug-board-header{--tw-border-opacity:1;align-items:center;border-bottom-width:1px;border-color:rgb(55 65 81/var(--tw-border-opacity,1));display:flex;justify-content:space-between;padding:.75rem}.debug-board-logs{max-height:400px}.debug-board-logs>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.debug-board-logs{overflow-y:auto;padding:.75rem}";
styleInject(css_248z);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var MAX_LOGS = 1000;
var formatMessage = function (args) {
    return args
        .map(function (arg) {
        if (typeof arg === "object") {
            try {
                return JSON.stringify(arg, null, 2);
            }
            catch (error) {
                return String(arg);
            }
        }
        return String(arg);
    })
        .join(" ");
};
var createConsoleInterceptor = function (originalMethod, type, handleLog) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var stack = (_a = new Error().stack) === null || _a === void 0 ? void 0 : _a.split("\n").slice(2).join("\n");
        handleLog(type, formatMessage(args), stack);
        originalMethod.apply(console, args);
    };
};
function useDebugLogs(componentName) {
    var _a = React.useState([]), logs = _a[0], setLogs = _a[1];
    var clearLogs = React.useCallback(function () {
        setLogs([]);
    }, []);
    var addLog = React.useCallback(function (type, message, stack) {
        var newLog = {
            id: Date.now(),
            type: type,
            message: message,
            timestamp: new Date().toISOString(),
            stack: stack,
            componentName: componentName,
        };
        setLogs(function (prevLogs) {
            var updatedLogs = __spreadArray([newLog], prevLogs, true);
            return updatedLogs.slice(0, MAX_LOGS); // Keep only the last MAX_LOGS entries from the start
        });
    }, [componentName]);
    React.useEffect(function () {
        var originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
        };
        // Interceptar los métodos de console
        console.log = createConsoleInterceptor(originalConsole.log, "log", addLog);
        console.warn = createConsoleInterceptor(originalConsole.warn, "warn", addLog);
        console.error = createConsoleInterceptor(originalConsole.error, "error", addLog);
        return function () {
            console.log = originalConsole.log;
            console.warn = originalConsole.warn;
            console.error = originalConsole.error;
        };
    }, [addLog]);
    return {
        logs: logs,
        clearLogs: clearLogs,
    };
}

var containerVariants = {
    maximized: {
        y: 0,
        height: "auto",
        width: "500px",
        opacity: 1,
        scale: 1,
        transition: { type: "spring", damping: 20, stiffness: 250 },
    },
    minimized: {
        y: "calc(100% - 48px)",
        height: "48px",
        width: "200px",
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
            delay: 0.2, // Agregado delay para una mejor experiencia inicial
        },
    },
};
var contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            opacity: { duration: 0.3 },
            y: { type: "spring", damping: 15, stiffness: 200 },
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        scale: 0.98,
        transition: {
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
        },
    },
};
var stackVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.2 } },
};
var logItemVariants = {
    initial: { opacity: 0, y: -20, scale: 0.9 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", damping: 20 },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        x: -100,
        transition: { duration: 0.2 },
    },
};
var emptyContainerVariants = {
    initial: { opacity: 1, height: "auto" },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            height: { delay: 0.2, duration: 0.3 },
            opacity: { duration: 0.2 },
        },
    },
};

var BoardHeader = function (_a) {
    var logsCount = _a.logsCount, isMinimized = _a.isMinimized, onToggleStack = _a.onToggleStack, onClear = _a.onClear, onToggleMinimize = _a.onToggleMinimize;
    return (React.createElement("div", { className: "p-3 flex items-center justify-between border-b border-gray-700 ".concat(isMinimized ? "cursor-pointer border-none" : ""), onClick: isMinimized ? onToggleMinimize : undefined },
        React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("h2", { className: "text-base font-bold" }, "DebugBoard"),
            React.createElement(framerMotion.AnimatePresence, null, logsCount > 0 && (React.createElement(framerMotion.motion.span, { initial: { scale: 0 }, animate: { scale: 1 }, exit: { opacity: 0, scale: 0.5 }, className: "text-sm bg-blue-500 px-2 py-0.5 rounded-full" }, logsCount)))),
        !isMinimized ? (React.createElement("div", { className: "flex gap-1" },
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onToggleStack();
                }, className: "p-1 rounded cursor-pointer hover:bg-gray-700", title: "Toggle Stack Trace" },
                React.createElement(md.MdStackedLineChart, { size: 16 })),
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onClear();
                }, className: "p-1 text-red-400 rounded cursor-pointer hover:bg-gray-700", title: "Clear Logs" },
                React.createElement(md.MdClearAll, { size: 16 })),
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onToggleMinimize();
                }, className: "p-1 rounded cursor-pointer hover:bg-gray-700", title: "Minimize" },
                React.createElement(md.MdExpandMore, { size: 16 })))) : (React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement(md.MdExpandLess, { size: 16 })))));
};

var FilterButtons = function (_a) {
    var currentFilter = _a.currentFilter, onFilterChange = _a.onFilterChange;
    return (React.createElement("div", { className: "p-3 flex gap-2" }, ["all", "log", "warn", "error"].map(function (type) { return (React.createElement(framerMotion.motion.button, { key: type, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-3 py-1 text-sm rounded cursor-pointer ".concat(currentFilter === type
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"), onClick: function () { return onFilterChange(type); } }, type.toUpperCase())); })));
};

var LogItem = function (_a) {
    var log = _a.log, showStack = _a.showStack;
    return (React.createElement(framerMotion.motion.div, { layout: true, variants: logItemVariants, initial: "initial", animate: "animate", exit: "exit", transition: { type: "spring", damping: 20 }, className: "p-3 text-sm rounded-md bg-gray-800 ".concat(log.type === "error"
            ? "border-l-2 border-red-500"
            : log.type === "warn"
                ? "border-l-2 border-yellow-500"
                : "border-l-2 border-green-500") },
        React.createElement("div", { className: "font-mono text-sm ".concat(log.type === "error"
                ? "text-red-400"
                : log.type === "warn"
                    ? "text-yellow-400"
                    : "text-green-400") },
            "[",
            new Date(log.timestamp).toLocaleTimeString(),
            "] ",
            log.type.toUpperCase()),
        React.createElement("div", { className: "mt-1 text-sm whitespace-pre-wrap" }, log.message),
        React.createElement(framerMotion.AnimatePresence, null, showStack && log.stack && (React.createElement(framerMotion.motion.div, { variants: stackVariants, initial: "hidden", animate: "visible", exit: "hidden", className: "mt-2 text-xs text-gray-400 font-mono whitespace-pre-wrap" }, log.stack)))));
};

function DebugBoard() {
    var _a = useDebugLogs(), logs = _a.logs, clearLogs = _a.clearLogs;
    var _b = React.useState("all"), filter = _b[0], setFilter = _b[1];
    var _c = React.useState(false), showStack = _c[0], setShowStack = _c[1];
    var _d = React.useState(true), isMinimized = _d[0], setIsMinimized = _d[1];
    var _e = React.useState(false), isClearing = _e[0], setIsClearing = _e[1];
    var filteredLogs = logs.filter(function (log) { return filter === "all" || log.type === filter; });
    var handleClearLogs = React.useCallback(function () {
        setIsClearing(true);
        var logsList = document.querySelector(".logs-container");
        if (logsList) {
            logsList.classList.add("pointer-events-none");
        }
        setTimeout(function () {
            clearLogs();
            setIsClearing(false);
        }, 500);
    }, [clearLogs]);
    return (React.createElement(framerMotion.motion.div, { variants: containerVariants, initial: "maximized", animate: isMinimized ? "minimized" : "maximized", className: "fixed bottom-4 right-4 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden ".concat(isMinimized ? "hover:bg-gray-800 transition-colors duration-200" : "") },
        React.createElement(BoardHeader, { logsCount: logs.length, isMinimized: isMinimized, showStack: showStack, onToggleStack: function () { return setShowStack(!showStack); }, onClear: handleClearLogs, onToggleMinimize: function () { return setIsMinimized(!isMinimized); } }),
        React.createElement(framerMotion.AnimatePresence, { mode: "wait" }, !isMinimized && (React.createElement(framerMotion.motion.div, { variants: contentVariants, initial: "initial", animate: "animate", exit: "exit", className: "max-h-[500px] overflow-hidden" },
            React.createElement(FilterButtons, { currentFilter: filter, onFilterChange: setFilter }),
            React.createElement(framerMotion.AnimatePresence, { mode: "wait" }, filteredLogs.length > 0 || isClearing ? (React.createElement(framerMotion.motion.div, { key: "logs-container", className: "space-y-2 p-3 overflow-y-auto max-h-[400px] logs-container", variants: emptyContainerVariants, initial: "initial", exit: "exit" },
                React.createElement(framerMotion.AnimatePresence, { mode: "popLayout" }, filteredLogs.map(function (log) { return (React.createElement(LogItem, { key: log.id, log: log, showStack: showStack })); })))) : (React.createElement(framerMotion.motion.div, { key: "empty-state", initial: { opacity: 0 }, animate: { opacity: 1 }, className: "p-8 text-center text-gray-500" }, "No logs to display"))))))));
}

exports.DebugBoard = DebugBoard;
exports.useDebugLogs = useDebugLogs;
//# sourceMappingURL=index.js.map
