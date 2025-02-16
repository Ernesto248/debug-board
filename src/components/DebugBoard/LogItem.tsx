import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogItemProps } from "./types";
import { stackVariants, logItemVariants } from "./animations";

export const LogItem = ({ log, showStack }: LogItemProps) => (
  <motion.div
    layout
    variants={logItemVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ type: "spring", damping: 20 }}
    className={`p-3 text-sm rounded-md bg-gray-800 ${
      log.type === "error"
        ? "border-l-2 border-red-500"
        : log.type === "warn"
        ? "border-l-2 border-yellow-500"
        : "border-l-2 border-green-500"
    }`}
  >
    <div
      className={`font-mono text-sm ${
        log.type === "error"
          ? "text-red-400"
          : log.type === "warn"
          ? "text-yellow-400"
          : "text-green-400"
      }`}
    >
      [{new Date(log.timestamp).toLocaleTimeString()}] {log.type.toUpperCase()}
    </div>
    <div className="mt-1 text-sm whitespace-pre-wrap">{log.message}</div>
    <AnimatePresence>
      {showStack && log.stack && (
        <motion.div
          variants={stackVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mt-2 text-xs text-gray-400 font-mono whitespace-pre-wrap"
        >
          {log.stack}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
