import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { LogoCloud } from "@/components/LogoCloud"
import { BlogFeatured } from "@/components/BlogFeatured"
import { ContactHero } from "@/components/ContactHero"
import { SupportSection } from "@/components/SupportSection"
import { AboutCallOut } from "@/components/AboutCallOut"
import { AboutHeading } from "@/components/AboutHeading"
import { DesignCTA } from "@/components/DesignCTA"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <BlogFeatured />
        <AboutHeading />
        <AboutCallOut />
        <Testimonials />
        <Pricing />
        <DesignCTA />
        
        <SupportSection />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
