import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdExpandMore,
  MdExpandLess,
  MdClearAll,
  MdStackedLineChart,
} from "react-icons/md";
import { BoardHeaderProps } from "./types";

export const BoardHeader = ({
  logsCount,
  isMinimized,
  onToggleStack,
  onClear,
  onToggleMinimize,
}: BoardHeaderProps) => (
  <div
    className={`p-3 flex items-center justify-between border-b border-gray-700 ${
      isMinimized ? "cursor-pointer border-none" : ""
    }`}
    onClick={isMinimized ? onToggleMinimize : undefined}
  >
    <div className="flex items-center gap-2">
      <h2 className="text-base font-bold">DebugBoard</h2>
      <AnimatePresence>
        {logsCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-sm bg-blue-500 px-2 py-0.5 rounded-full"
          >
            {logsCount}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    {!isMinimized ? (
      <div className="flex gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleStack();
          }}
          className="p-1 hover:bg-gray-700 rounded cursor-pointer"
          title="Toggle Stack Trace"
        >
          <MdStackedLineChart size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="p-1 hover:bg-gray-700 rounded text-red-400 cursor-pointer"
          title="Clear Logs"
        >
          <MdClearAll size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleMinimize();
          }}
          className="p-1 hover:bg-gray-700 rounded cursor-pointer"
          title="Minimize"
        >
          <MdExpandMore size={16} />
        </button>
      </div>
    ) : (
      <div className="flex items-center gap-2">
        <MdExpandLess size={16} />
      </div>
    )}
  </div>
);
