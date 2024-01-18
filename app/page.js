import { Demo } from "./components/Demo";
import { Features } from "./components/GetStarted";
import { Hero } from "./components/Hero";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <Demo />
      <Features />
    </main>
  )
}
