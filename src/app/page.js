import Homepage from "@/components/Homepage"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Aboutme from "@/components/AboutMe"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between items-center relative bg-gradient-to-br from-[#E4E6FF] via-white to-[#E4EBFF]">
      <Header />
      <Homepage />
      <Aboutme />
      <Projects />
      <Footer />
    </main>
  )
}
 