import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import Lenis from './@lenis/lenis'
import DarkMode from './@darkmode/darkmode'

const work_sans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Dhanavel | Full Stack Developer",
  description: "Good day! I'm Dhanavel, a Full Stack Developer who is passionate, creative, and driven to produce outstanding digital experiences. I have developed my knowledge of front-end and back-end technologies via my experience in the field of web development, enabling me to create seamless, user-friendly, and cutting-edge apps.",
  keywords: "portfolio, full stack developer, software development engineer, javascript, reactjs, nodejs, angular, nextjs, react native"
}

export default function RootLayout({
  children, header, footer
}: {
  children: React.ReactNode, header: React.ReactNode, footer: React.ReactNode
}) {
  return (
    <DarkMode>
      {/* <Lenis> */}
        <body className={`${work_sans.className} break-words selection:bg-primary selection:text-[white] dark:bg-darkprimary`}>
          {header}
          {children}
          {footer}
        </body>
      {/* </Lenis> */}
    </DarkMode>
  )
}
