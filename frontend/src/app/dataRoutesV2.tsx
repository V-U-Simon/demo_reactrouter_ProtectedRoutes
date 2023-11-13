import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "src/routes/Layout";
import { ProtectedUniversal } from "src/routes/ProtectedRoutes";

// Маршруты как комопоненты
export function DataRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
        loader={() => {
          console.log("loader is working", localStorage.getItem("authToken"));
          return null;
        }}
      >
        <Route
          path="public"
          element={
            <>
              <h1>Public route</h1>
              <p>Content whih is awalable to everyone.</p>
            </>
          }
        />

        {/* вложенный маршрут */}
        <Route path="privateRoute" element={<ProtectedUniversal />}>
          <Route
            index
            element={
              <>
                <h1>Using privateRoute</h1>
                <p>Some private content.</p>
              </>
            }
          />
        </Route>

        {/* вложенный компонент */}
        <Route
          path="privateComponent"
          element={
            <ProtectedUniversal>
              <>
                <h1>Using ProtectedComponents</h1>
                <p>Some private content.</p>
              </>
            </ProtectedUniversal>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
