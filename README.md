# React Debug Board

A customizable debug console component for React applications that automatically captures all console logs.

![Version](https://img.shields.io/npm/v/@ernesto248/react-debug-board)
![License](https://img.shields.io/npm/l/@ernesto248/react-debug-board)

## Features

- 🚀 Real-time log display
- 🔍 Filter logs by type (log, warn, error)
- 📚 Stack trace support
- 📱 Responsive and minimizable interface
- ✨ Smooth animations using Framer Motion
- 🎨 Customizable styling
- 🔄 Auto-scrolling to latest logs

## Installation

```bash
npm install @react-debug-board
# or
yarn add @react-debug-board
# or
pnpm add @react-debug-board
```

## Quick Start

```jsx
import { DebugBoard } from "@ernestoleonard/react-debug-board";

function App() {
  return (
    <div>
      {/* Just add the DebugBoard component and it will automatically capture all console logs */}
      <DebugBoard />
    </div>
  );
}

// Anywhere in your app:
console.log("This will be captured!");
console.warn("This warning too!");
console.error("Errors with stack trace!");
```

## API Reference

### useDebugLogs Hook

```typescript
const { logs, addLog, clearLogs } = useDebugLogs();
```

#### Methods:

- `addLog(log: LogEntry)`: Add a new log entry
- `clearLogs()`: Clear all logs
- `logs`: Array of current log entries

#### LogEntry Type:

```typescript
type LogEntry = {
  type: "log" | "warn" | "error";
  message: string;
  stack?: string;
  timestamp?: number; // Auto-generated if not provided
  id?: string; // Auto-generated if not provided
};
```

### DebugBoard Component

```jsx
<DebugBoard />
```

Features:

- Minimize/Maximize toggle
- Stack trace toggle
- Clear logs button
- Log type filters
- Auto-scrolling log container

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](./LICENSE)
