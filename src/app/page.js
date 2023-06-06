import Homepage from "@/components/Homepage"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-screen flex flex-col justify-between items-center relative bg-gradient-to-br from-violet-200 via-white to-sky-100">
      <Header />
      <Homepage />
      <Footer />
    </main>
  )
}
 