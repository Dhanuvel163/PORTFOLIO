import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import DarkMode from './@darkmode/darkmode'
import Navcontent from '@/components/navcontent/Navcontent'
import Footer from './@footer/page'

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dhanavel | Full Stack Developer",
  description: "Good day! I'm Dhanavel, a Full Stack Developer who is passionate, creative, and driven to produce outstanding digital experiences. I have developed my knowledge of front-end and back-end technologies via my experience in the field of web development, enabling me to create seamless, user-friendly, and cutting-edge apps.",
  keywords: "portfolio, full stack developer, software development engineer, javascript, reactjs, nodejs, angular, nextjs, react native"
}

export default function RootLayout({  
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DarkMode>
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