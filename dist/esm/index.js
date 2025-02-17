import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdStackedLineChart, MdClearAll, MdExpandMore, MdExpandLess } from 'react-icons/md';

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
    var _a = useState([]), logs = _a[0], setLogs = _a[1];
    var clearLogs = useCallback(function () {
        setLogs([]);
    }, []);
    var addLog = useCallback(function (type, message, stack) {
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
    useEffect(function () {
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
            React.createElement(AnimatePresence, null, logsCount > 0 && (React.createElement(motion.span, { initial: { scale: 0 }, animate: { scale: 1 }, exit: { opacity: 0, scale: 0.5 }, className: "text-sm bg-blue-500 px-2 py-0.5 rounded-full" }, logsCount)))),
        !isMinimized ? (React.createElement("div", { className: "flex gap-1" },
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onToggleStack();
                }, className: "p-1 rounded cursor-pointer hover:bg-gray-700", title: "Toggle Stack Trace" },
                React.createElement(MdStackedLineChart, { size: 16 })),
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onClear();
                }, className: "p-1 text-red-400 rounded cursor-pointer hover:bg-gray-700", title: "Clear Logs" },
                React.createElement(MdClearAll, { size: 16 })),
            React.createElement("button", { onClick: function (e) {
                    e.stopPropagation();
                    onToggleMinimize();
                }, className: "p-1 rounded cursor-pointer hover:bg-gray-700", title: "Minimize" },
                React.createElement(MdExpandMore, { size: 16 })))) : (React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement(MdExpandLess, { size: 16 })))));
};

var FilterButtons = function (_a) {
    var currentFilter = _a.currentFilter, onFilterChange = _a.onFilterChange;
    return (React.createElement("div", { className: "p-3 flex gap-2" }, ["all", "log", "warn", "error"].map(function (type) { return (React.createElement(motion.button, { key: type, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-3 py-1 text-sm rounded cursor-pointer ".concat(currentFilter === type
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"), onClick: function () { return onFilterChange(type); } }, type.toUpperCase())); })));
};

var LogItem = function (_a) {
    var log = _a.log, showStack = _a.showStack;
    return (React.createElement(motion.div, { layout: true, variants: logItemVariants, initial: "initial", animate: "animate", exit: "exit", transition: { type: "spring", damping: 20 }, className: "p-3 text-sm rounded-md bg-gray-800 ".concat(log.type === "error"
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
        React.createElement(AnimatePresence, null, showStack && log.stack && (React.createElement(motion.div, { variants: stackVariants, initial: "hidden", animate: "visible", exit: "hidden", className: "mt-2 text-xs text-gray-400 font-mono whitespace-pre-wrap" }, log.stack)))));
};

function DebugBoard() {
    var _a = useDebugLogs(), logs = _a.logs, clearLogs = _a.clearLogs;
    var _b = useState("all"), filter = _b[0], setFilter = _b[1];
    var _c = useState(false), showStack = _c[0], setShowStack = _c[1];
    var _d = useState(true), isMinimized = _d[0], setIsMinimized = _d[1];
    var _e = useState(false), isClearing = _e[0], setIsClearing = _e[1];
    var filteredLogs = logs.filter(function (log) { return filter === "all" || log.type === filter; });
    var handleClearLogs = useCallback(function () {
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
    return (React.createElement(motion.div, { variants: containerVariants, initial: "maximized", animate: isMinimized ? "minimized" : "maximized", className: "fixed bottom-4 right-4 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden ".concat(isMinimized ? "hover:bg-gray-800 transition-colors duration-200" : "") },
        React.createElement(BoardHeader, { logsCount: logs.length, isMinimized: isMinimized, showStack: showStack, onToggleStack: function () { return setShowStack(!showStack); }, onClear: handleClearLogs, onToggleMinimize: function () { return setIsMinimized(!isMinimized); } }),
        React.createElement(AnimatePresence, { mode: "wait" }, !isMinimized && (React.createElement(motion.div, { variants: contentVariants, initial: "initial", animate: "animate", exit: "exit", className: "max-h-[500px] overflow-hidden" },
            React.createElement(FilterButtons, { currentFilter: filter, onFilterChange: setFilter }),
            React.createElement(AnimatePresence, { mode: "wait" }, filteredLogs.length > 0 || isClearing ? (React.createElement(motion.div, { key: "logs-container", className: "space-y-2 p-3 overflow-y-auto max-h-[400px] logs-container", variants: emptyContainerVariants, initial: "initial", exit: "exit" },
                React.createElement(AnimatePresence, { mode: "popLayout" }, filteredLogs.map(function (log) { return (React.createElement(LogItem, { key: log.id, log: log, showStack: showStack })); })))) : (React.createElement(motion.div, { key: "empty-state", initial: { opacity: 0 }, animate: { opacity: 1 }, className: "p-8 text-center text-gray-500" }, "No logs to display"))))))));
}

export { DebugBoard, useDebugLogs };
//# sourceMappingURL=index.js.map
