import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Projects />
      <Timeline />
      <Skills />
    </main>
  )
}

