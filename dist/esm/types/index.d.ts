import "./styles/main.css";
import "./styles/debug-board.css";
export { default as DebugBoard } from "./components/DebugBoard";
export { useDebugLogs } from "./hooks/useDebugLogs";
export type { LogType, LogEntry } from "./hooks/useDebugLogs";
export type { LogTypeAll } from "./components/DebugBoard/types";
