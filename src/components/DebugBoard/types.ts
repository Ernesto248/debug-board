import { LogEntry } from "../../hooks/useDebugLogs";

export type LogTypeAll = "all" | "log" | "warn" | "error";

export interface LogItemProps {
  log: LogEntry;
  showStack: boolean;
}

export interface FilterButtonsProps {
  currentFilter: LogTypeAll;
  onFilterChange: (filter: LogTypeAll) => void;
}

export interface BoardHeaderProps {
  logsCount: number;
  isMinimized: boolean;
  showStack: boolean;
  onToggleStack: () => void;
  onClear: () => void;
  onToggleMinimize: () => void;
}
