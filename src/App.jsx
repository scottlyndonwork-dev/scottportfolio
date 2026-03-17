import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    const onContext = (e) => e.preventDefault();
    const onKeyDown = (e) => {
      // Block F12 (DevTools)
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return;
      }

      // Normalize modifier checks for Windows/Linux (ctrl) and Mac (meta)
      const mod = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;

      // Block common dev shortcuts:
      // Ctrl/Cmd+Shift+I  -> open devtools
      // Ctrl/Cmd+Shift+J  -> open devtools (console)
      // Ctrl/Cmd+Shift+C  -> inspect element
      // Ctrl/Cmd+Shift+K  -> firefox devtools
      // Ctrl/Cmd+U        -> view source
      if (mod && shift && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c' || e.key === 'K' || e.key === 'k')) {
        e.preventDefault();
        return;
      }

      if (mod && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return;
      }
    };

    window.addEventListener("contextmenu", onContext);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("contextmenu", onContext);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
