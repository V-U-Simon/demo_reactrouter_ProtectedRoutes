import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/routes/Layout";
import { ProtectedComponents, ProtectedRoutes } from "src/routes/ProtectedRoutes";

// Массив маршрутов
export function DataRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "public",
          element: (
            <>
              <h1>public</h1>
              <p>Content whih is awalable to everyone.</p>
            </>
          ),
        },

        // вложенный маршрут
        {
          path: "privateRoute",
          element: <ProtectedRoutes />,
          children: [
            {
              index: true,
              element: (
                <>
                  <h1>using ProtectedRoutes</h1>
                  <p>Some private content.</p>
                </>
              ),
            },
          ],
        },

        // вложенный компонент
        {
          path: "privateComponent",
          element: (
            <ProtectedComponents>
              <>
                <h1>using ProtectedComponents</h1>
                <p>Some private content.</p>
              </>
            </ProtectedComponents>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
