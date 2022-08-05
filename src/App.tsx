import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader/PageLoader";

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
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route
            path="pantries"
            element={
              <Suspense fallback={<PageLoader />}>
                <PantriesPage />
              </Suspense>
            }
          />
          <Route
            path="pantries/:pantryUuid"
            element={
              <Suspense fallback={<PageLoader />}>
                <PantryPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
