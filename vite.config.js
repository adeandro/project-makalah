import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith("/projects/")) {
          const filePath = path.join(__dirname, "public", req.url);
          if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
            res.end(fs.readFileSync(filePath));
            return;
          }
        }
        next();
      });
    },
  },
});
