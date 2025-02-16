import React from "react";
import { motion } from "framer-motion";
import { FilterButtonsProps } from "./types";

export const FilterButtons = ({
  currentFilter,
  onFilterChange,
}: FilterButtonsProps) => (
  <div className="p-3 flex gap-2">
    {["all", "log", "warn", "error"].map((type) => (
      <motion.button
        key={type}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-3 py-1 text-sm rounded cursor-pointer ${
          currentFilter === type
            ? "bg-blue-500"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
        onClick={() => onFilterChange(type as any)}
      >
        {type.toUpperCase()}
      </motion.button>
    ))}
  </div>
);
