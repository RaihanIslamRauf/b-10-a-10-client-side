import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import AuthProvider from "./provider/AuthProvider";
import ThemeProvider from "./themeProvider/ThemeProvider";
 // ✅ Import ThemeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider> {/* ✅ Wrap everything */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
