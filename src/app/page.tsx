import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Interests from "@/components/interests";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="scroll-smooth flex w-3/4 m-auto min-h-screen flex-col gap-y-10   justify-between px-24 py-12 max-md:p-12 max-md:w-full">
        <About></About>
        <Interests></Interests>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  )
}
