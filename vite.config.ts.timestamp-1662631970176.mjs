// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
var vite_config_default = defineConfig({
  server: { https: true },
  plugins: [react(), mkcert()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKdWxpdXNcXFxcRGVza3RvcFxcXFxQZW5vd2lcXFxcYXBwLXBlbm93aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSnVsaXVzXFxcXERlc2t0b3BcXFxcUGVub3dpXFxcXGFwcC1wZW5vd2lcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0p1bGl1cy9EZXNrdG9wL1Blbm93aS9hcHAtcGVub3dpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7IGh0dHBzOiB0cnVlIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBta2NlcnQoKV1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9CO0FBQ3RWLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFHbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUSxFQUFFLE9BQU8sS0FBSztBQUFBLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQzdCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==