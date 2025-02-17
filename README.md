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
npm install @ernesto248/react-debug-board
```

## Usage

```jsx
// Import both the component and styles
import { DebugBoard } from "@ernesto248/react-debug-board";
import "@ernesto248/react-debug-board/dist/styles.css";

function App() {
  return (
    <div className="debug-board">
      <DebugBoard />
    </div>
  );
}
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
