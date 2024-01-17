import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { BlogFeatured } from "@/components/BlogFeatured"
import { SupportSection } from "@/components/SupportSection"
import { AboutCallOut } from "@/components/AboutCallOut"
import { AboutHeading } from "@/components/AboutHeading"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <BlogFeatured />
        <AboutHeading />
        <AboutCallOut />
        <SupportSection />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
