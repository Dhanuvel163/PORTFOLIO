import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import DarkMode from './@darkmode/darkmode'
import Navcontent from '@/components/navcontent/Navcontent'
import Footer from './@footer/page'
import Script from "next/script";
import { jsonLd, appsJsonLd, faqJsonLd, productJsonLd } from './app_ld'

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dhanavel | Full Stack Developer",
  description: "Good day! I'm Dhanavel, a Full Stack Developer who is passionate, creative, and driven to produce outstanding digital experiences. I have developed my knowledge of front-end and back-end technologies via my experience in the field of web development, enabling me to create seamless, user-friendly, and cutting-edge apps.",
  keywords: "portfolio, full stack developer, software development engineer, javascript, reactjs, nodejs, angular, nextjs, react native",
  verification: {
    google: "Fe573o-6CZB5cE_hgGMcTZBft2Cfo0NAf9PQkR_PPVM",
  },
  openGraph: {
    title: "Dhanavel | Full Stack Developer",
    description: "Good day! I'm Dhanavel, a Full Stack Developer who is passionate, creative, and driven to produce outstanding digital experiences. I have developed my knowledge of front-end and back-end technologies via my experience in the field of web development, enabling me to create seamless, user-friendly, and cutting-edge apps.",
    url: "https://www.dhanavel.com",
    siteName: "Dhanavel",
    images: [
      {
        url: "https://www.dhanavel.com/images/dhanavel.jpg",
        width: 739,
        height: 778,
        alt: "Dhanavel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanavel | Full Stack Developer",
    description: "Good day! I'm Dhanavel, a Full Stack Developer who is passionate, creative, and driven to produce outstanding digital experiences. I have developed my knowledge of front-end and back-end technologies via my experience in the field of web development, enabling me to create seamless, user-friendly, and cutting-edge apps.",
    images: ["https://www.dhanavel.com/images/dhanavel.jpg"],
  },
}

export default function RootLayout({  
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DarkMode>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {
        appsJsonLd.map((app, index) => (
          <Script key={`software-application-ld-person-${index}`}
            id={`software-application-ld-person-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
          />
        ))
      }
      {
        productJsonLd.map((product, index) => (
          <Script key={`product-ld-person-${index}`}
            id={`product-ld-person-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
          />
        ))
      }
      <body className={`${work_sans.className} break-words selection:bg-primary selection:text-[white] dark:bg-darkprimary`}>
        <Navcontent/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </DarkMode>
  )
}