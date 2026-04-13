# React Design Patterns - 
A portfolio-ready React project demonstrating senior-level design patterns and custom hooks.

## Features

### Screenhot
[Image](./Screenshot_1.png)


### Deployment
[Live](https://shoppinglistmgt.netlify.app/)


### Custom Hooks Implemented

#### 1. `useTodo` - Todo List Management
- Full CRUD operations (Create, Read, Update, Delete)
- Toggle completion state
- Clear completed items
- Computed properties (remaining/completed count)
- Uses `useCallback` for optimized re-renders

#### 2. `useInput` - Controlled Input State
- Manages input value state
- Provides `bind` object for easy prop spreading
- Reset functionality
- Memoized handlers

#### 3. `useBoolean` - Boolean State Toggle
- Simple true/false state management
- `setTrue`, `setFalse`, `toggle` methods
- Fully memoized with `useCallback`

### Design Patterns

#### Compound Component Pattern
The `SplitScreen` component demonstrates the compound component pattern:
- Accepts children as an array
- Destructures into left/right components
- Flexible sizing via props

## Bugs Fixed

| File | Bug | Fix |
|------|-----|-----|
| `useTodo.jsx` | `Math.radon` | Changed to `Math.random()` |
| `useInput.jsx` | `event.target.vaue` | Changed to `event.target.value` |
| `useBoolean.jsx` | `toggle` function parameter issue | Fixed callback to use functional update |
| `TodoList.jsx` | Wrong import syntax | Removed curly braces for default export |
| `TodoList.jsx` | `key={id}` | Changed to `key={todo.id}` |
| `TodoList.jsx` | `onClick={deleteTodo}` | Changed to `onClick={() => deleteTodo(todo.id)}` |
| `TodoList.jsx` | Form not using useInput | Integrated useInput hook properly |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS 4** - Styling
- **styled-components** - CSS-in-JS for SplitScreen

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # App header with navigation
│   ├── Main.jsx        # useBoolean demo
│   ├── Footer.jsx      # App footer
│   ├── TodoList.jsx    # Todo app using useTodo & useInput
│   └── SplitScreen.jsx # Compound component pattern demo
├── myHooks/
│   ├── useTodo.jsx     # Todo list state management
│   ├── useInput.jsx    # Controlled input management
│   └── useBoolean.jsx  # Boolean state toggle
├── App.jsx             # Main application
└── index.css           # Global styles
```

##  Learning Resources

- [LinkedIn Learning - React Design Patterns](https://www.linkedin.com/learning/react-design-patterns-25656257/)
- [Udemy - React for Senior Engineers](https://gale.udemy.com/course/react-for-senior-engineers/)

## License

MIT
