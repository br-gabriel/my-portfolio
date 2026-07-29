import Homepage from "@/components/Homepage"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Aboutme from "@/components/Aboutme"
import Projects from "@/components/Projects"
import TechCarousel from "@/components/TechCarousel"
import Stack from "@/components/Stack"

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center bg-td-bg">
      <Header />
      <Homepage />
      <TechCarousel />
      <Aboutme />
      <Projects />
      <Stack />
      <Footer />
    </main>
  )
}