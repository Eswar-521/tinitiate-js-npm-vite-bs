## JS NPM Vite Bootstrap Project (`js-npm-vite-bs`)

### Project Creation

```sh
# Create a new Vite project with React template
npm create vite@latest js-npm-vite-bs 

# Navigate to the project directory
cd js-npm-vite-bs
```

### Installing Dependencies

```sh
# Install necessary dependencies
npm install
```
# Install Bootstrap for styling
```sh
npm install bootstrap
```
# Install React Router for navigation (if needed)
```sh
npm install react-router-dom
```

### Adding Bootstrap 

Import Bootstrap CSS in `main.jsx`:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Running the Project

```sh
npm run dev
```

### Building for Production

```sh
npm run build
```
