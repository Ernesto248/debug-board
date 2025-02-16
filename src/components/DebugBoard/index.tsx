import React from "react";
import { useState, useCallback } from "react";
import { useDebugLogs } from "../../hooks/useDebugLogs";
import { motion, AnimatePresence } from "framer-motion";
import { LogTypeAll } from "./types";
import {
  containerVariants,
  contentVariants,
  emptyContainerVariants,
} from "./animations";
import { BoardHeader } from "./BoardHeader";
import { FilterButtons } from "./FilterButtons";
import { LogItem } from "./LogItem";

export default function DebugBoard() {
  const { logs, clearLogs } = useDebugLogs();
  const [filter, setFilter] = useState<LogTypeAll>("all");
  const [showStack, setShowStack] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isClearing, setIsClearing] = useState(false);

  const filteredLogs = logs.filter(
    (log) => filter === "all" || log.type === filter
  );

  const handleClearLogs = useCallback(() => {
    setIsClearing(true);
    const logsList = document.querySelector(".logs-container");
    if (logsList) {
      logsList.classList.add("pointer-events-none");
    }
    setTimeout(() => {
      clearLogs();
      setIsClearing(false);
    }, 500);
  }, [clearLogs]);

  return (
    <motion.div
      variants={containerVariants}
      initial="maximized"
      animate={isMinimized ? "minimized" : "maximized"}
      className={`fixed bottom-4 right-4 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden ${
        isMinimized ? "hover:bg-gray-800 transition-colors duration-200" : ""
      }`}
    >
      <BoardHeader
        logsCount={logs.length}
        isMinimized={isMinimized}
        showStack={showStack}
        onToggleStack={() => setShowStack(!showStack)}
        onClear={handleClearLogs}
        onToggleMinimize={() => setIsMinimized(!isMinimized)}
      />

      <AnimatePresence mode="wait">
        {!isMinimized && (
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="max-h-[500px] overflow-hidden"
          >
            <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

            <AnimatePresence mode="wait">
              {filteredLogs.length > 0 || isClearing ? (
                <motion.div
                  key="logs-container"
                  className="space-y-2 p-3 overflow-y-auto max-h-[400px] logs-container"
                  variants={emptyContainerVariants}
                  initial="initial"
                  exit="exit"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredLogs.map((log) => (
                      <LogItem key={log.id} log={log} showStack={showStack} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 text-center text-gray-500"
                >
                  No logs to display
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
