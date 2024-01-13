import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BlogLoop } from "@/components/BlogLoop"
import { NewsletterSignup } from "@/components/NewsletterSignup"
import { BlogHero } from "@/components/BlogHero"


export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogLoop />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  )
}
