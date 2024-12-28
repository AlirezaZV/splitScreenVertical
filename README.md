# splitScreenVertical
Vertical split screen or before/after React and Vite.js component.

![Demo](https://github.com/AlirezaZV/splitScreenVertical/blob/main/public/header.gif)

## Description

The `splitScreenVertical` project is designed for creating split-screen layouts in React applications. It can be used for comparing two different web pages, showing before and after content, or any other use case involving a vertical split screen. This component leverages React Router for navigation between different screens.

## Installation

To use this component in your project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/AlirezaZV/splitScreenVertical.git
   ```
2. Navigate to the project directory:
   ```sh
   cd splitScreenVertical
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

Import and use the `splitScreenVertical` component in your React application. Below is an example of how to set it up:

```jsx
import React from "react";
import HeroSection from "./components/HeroSection";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageFirst from "./pages/Page1";
import PageSecond from "./pages/Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection leftScreen="/page1.png" rightScreen="/page2.png" />} />
        <Route path="/page1" element={<PageFirst />} />
        <Route path="/page2" element={<PageSecond />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Props

The `HeroSection` component accepts the following props:

- `leftScreen`: The source for the left screen image.
- `rightScreen`: The source for the right screen image.

## Example

Here is an example of how to use the component in an application:

```jsx
import React from "react";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <HeroSection
        leftScreen="/path/to/left-image.png"
        rightScreen="/path/to/right-image.png"
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

Feel free to add or modify any sections as needed for your specific use case.
