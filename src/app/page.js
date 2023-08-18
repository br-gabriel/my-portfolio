import Homepage from "@/components/Homepage"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Aboutme from "@/components/Aboutme"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between items-center relative bg-gradient-to-br from-[#E4E6FF] dark:from-[#1F1E3B] via-white dark:via-black to-[#E4EBFF] dark:to-[#1E323B]">
      <Header />
      <Homepage />
      <Aboutme />
      <Projects />
      <Footer />
    </main>
  )
}
 