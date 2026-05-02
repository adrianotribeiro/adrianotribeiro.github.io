import { createFileRoute } from "@tanstack/react-router"
import { Hero } from "../components/hero/hero"
import { About } from "../components/about/about"
import { Technologies } from "../components/technologies/technologies"
import { Projects } from "../components/projects/projects"
import { Contact } from "../components/contact/contact"

function HomeComponent() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  )
}

export const Route = createFileRoute("/")({
  component: HomeComponent,
})
