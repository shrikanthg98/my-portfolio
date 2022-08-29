import React, { useContext } from 'react';
import Toggle from './components/toggle/Toggle';
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  return (
    <div style={{ backgroundColor: darkMode ? '#222' : 'white', color: darkMode && 'white' }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
