import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ContactHero } from "@/components/ContactHero"
import { SupportSection } from "@/components/SupportSection"


export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <SupportSection />
      </main>
      <Footer />
    </>
  )
}
