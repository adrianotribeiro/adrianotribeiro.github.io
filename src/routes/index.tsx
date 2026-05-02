import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "../components/hero/hero"
import { About } from "../components/about/about"

function HomeComponent() {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export const Route = createFileRoute("/")({
  component: HomeComponent,
})
