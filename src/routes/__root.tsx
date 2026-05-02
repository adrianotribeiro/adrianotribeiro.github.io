import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Header } from "../components/header/header"

export const Route = createRootRoute({
  component: () => (
    <main>
      <Header />
      <div
        className="container mx-auto"
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </main>
  ),
})
