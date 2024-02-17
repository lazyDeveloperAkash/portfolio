import './App.css'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/Parallax'
import ParticlesContainer from './components/ParticlesContainer'
import Project from './components/Project'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <div>
      <ParticlesContainer/>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Skills'><Skills/></section>
      <section id='Parallax'><Parallax /></section>
      <div id='Projects'><Project /></div>
      <section id='Contact'><Contact /></section>
    </div>
  )
}

export default App
