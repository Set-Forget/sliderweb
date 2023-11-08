import { Demo } from "./components/Demo";
import { Features } from "./components/Features";
import { GetStarted } from "./components/GetStarted";
import { Hero } from "./components/Hero";

export default function Homepage() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Demo/>
      <GetStarted/>
    </main>
  )
}
