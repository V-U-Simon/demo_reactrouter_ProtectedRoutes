// import { DataRoutes } from "src/routes/dataRoutesV1";
import { DataRoutes } from "src/app/dataRoutesV2";
import { AuthProvider } from "src/hooks/authProvider";

export function App() {
  return (
    <AuthProvider>
      <DataRoutes />
    </AuthProvider>
  );
}
