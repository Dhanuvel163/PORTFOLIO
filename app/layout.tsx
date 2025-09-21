import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import DarkMode from './@darkmode/darkmode'
import Navcontent from '@/components/navcontent/Navcontent'
import Footer from './@footer/page'
import Script from "next/script";

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
    siteName: "Your Portfolio",
    images: [
      {
        url: "https://www.dhanavel.com/images/dhanavel.jpg",
        width: 1200,
        height: 630,
        alt: "Your Portfolio",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhanavel",
    "url": "https://www.dhanavel.com",
    "image": "https://www.dhanavel.com/images/dhanavel.jpg",
    "jobTitle": "Full Stack Developer",
    "sameAs": [
      "https://github.com/Dhanuvel163",
      "https://www.linkedin.com/in/dhanavel-ramachandran-721802193",
      "https://x.com/dhanavel19"
    ]
  };
  return (
    <DarkMode>
      <Script
        id="json-ld-person"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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