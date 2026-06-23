import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Header } from "../components/header/header"
import { Footer } from "../components/footer/footer"

export const Route = createRootRoute({
  component: () => (
    <main>
      <Header />
      <section
        className="container mx-auto"
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Outlet />
        <TanStackRouterDevtools initialIsOpen={false} />
      </section>
      <Footer />
    </main>
  ),
})
