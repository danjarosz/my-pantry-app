import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const PantriesPage = React.lazy(
  () => import("./pages/PantriesPage/PantriesPage")
);
const PantryPage = React.lazy(() => import("./pages/PantryPage/PantryPage"));
const NotFoundPage = React.lazy(
  () => import("./pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="pantries" element={<PantriesPage />} />
          <Route path="pantries/:pantryUuid" element={<PantryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
