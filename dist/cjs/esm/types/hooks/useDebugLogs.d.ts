export type LogType = "log" | "warn" | "error";
export interface LogEntry {
    id: number;
    type: LogType;
    message: string;
    timestamp: string;
    stack?: string;
    componentName?: string;
}
export declare function useDebugLogs(componentName?: string): {
    logs: LogEntry[];
    clearLogs: () => void;
};
