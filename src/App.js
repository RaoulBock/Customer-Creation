import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./Context/AppProvider";
import { ROUTERS } from "./Context/RouterList";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {ROUTERS.map((e, i) => {
            return <Route key={i} path={e.path} element={e.element} />;
          })}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
