'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is RevOps? That sounds made up.',
      answer:
        'RevOps, short for Revenue Operations, is a strategic approach that aligns sales, marketing, and customer success departments to optimize revenue growth and enhance customer experiences. The term "RevOps" gained prominence in the mid-2010s and we feel it describes what we do much better than any other buzzword.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We have flexible pricing based on client needs, but traditionally we offer 2 main price tiers: $3,500 and $8,000 per month. We are currently working on a $250 a month option for total beginers and bootstrappers.',
    },
    {
      question: 'What if I just need a website?',
      answer:
        'Almost no business needs just a website. A website is not a sales tool, and by itself will end up just wasting your money. Our goal is for your business to be successful. Not just have a new website.',
    },
  ],
  [
    {
      question: 'Do you offer graphic design services?',
      answer:
        'We do, but only in support of lead generation, social media marketing, content production, paid advertising, and sales enablement. Essentially we only do what works.',
    },
    {
      question:
        'Do you know how to code?',
      answer:
        'We are focused on building the highest performing marketing websites possible, and our engineers are skilled all commonly used frontend and backend languages. That being said, we usually will not build your full product or app idea.',
    },
    {
      question:
        'What about SEO?',
      answer:
        'We value performance over everything, and keep core web vitals at the forefront of everything we build. We are technical SEO experts and can handle everything from seo content production to full website performance upgrades. Need local seo? We have you covered there too.',
    },
  ],
  [
    {
      question: 'Are you familiar with Wordpress / Webflow / Figma / Framer / Shopify / Magento / Commerce Tools / NextJS ...',
      answer:
        'We might be a young company but we are a team of professionals who each have over 15 years of experience. If you are using it in 2024, we have worked with it.',
    },
    {
      question: 'Are you familiar with Salesforce / Hubspot / Marketo / Klaviyo / Apollo / Six Sense ',
      answer: 'Every member of the Everyway team is located in Virginia.',
    },
    {
      question: 'Can we do a single campaign or project first before an all encompassing strategy?',
      answer:
        'Absolutely, reach out to matt@goeveryway.com with your needs and we can get started on a single project basis.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
           Answers to commonly asked questions. If you have any additional questions, reach out to <a href="mailto:matt@goeveryway.com">matt@goeveryway.com</a>.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
