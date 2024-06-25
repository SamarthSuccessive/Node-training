import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.js"],
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.jsx"],
      exclude: ["src/main.jsx"],
      reporter: ["text", "html", "json", "lcov"],
      enabled: true,
      reportOnFailure: true,
    },
    // coverage: {
    //   exclude: [

    //
    //   ]
    // }
  },
});
