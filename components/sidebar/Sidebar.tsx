'use client'
import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '@/app/@darkmode/darkmode';
import { MdClose } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { BiMailSend } from 'react-icons/bi';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen, onClose = ()=>{} }: SidebarProps) {
  const theme = useContext(ThemeContext);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const navigationItems = [
    { name: 'Home', icon: <FaHome />, href: '/', scrollTo: 'intro' },
    // { name: 'Skills', icon: <FaUser />, href: '/', scrollTo: 'skills' },
    { name: 'Projects', icon: <FaProjectDiagram />, href: '/projects', scrollTo: null },
  ];

  const socialLinks = [
    { icon: <AiFillGithub />, href: 'https://github.com/Dhanuvel163', label: 'GitHub' },
    { icon: <AiFillLinkedin />, href: 'https://www.linkedin.com/in/dhanavel-ramachandran-721802193/', label: 'LinkedIn' },
    { icon: <AiFillInstagram />, href: 'https://www.instagram.com/dhanavel_____/?hl=en', label: 'Instagram' },
    { icon: <BiMailSend />, href: 'mailto:dhanuram99@gmail.com', label: 'Email' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}/>
      <div className={`fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-darkprimary/95 backdrop-blur-lg border-r border-[#e4e0e0] dark:border-[#E5E7EB6E] z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB6E] dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-secondary">Menu</h2>
            <button
              onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close sidebar">
              <MdClose className="w-6 h-6 text-gray-600 dark:text-secondary" />
            </button>
          </div>
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.scrollTo && isHomePage ? (
                    <ScrollLink
                      to={item.scrollTo} spy={true} smooth={true}
                      offset={0} duration={100} onClick={onClose}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors cursor-pointer group">
                      <span className="text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-gray-700 dark:text-secondary font-medium">
                        {item.name}
                      </span>
                    </ScrollLink>
                  ) : (
                    <Link
                      href={item.href} onClick={onClose}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group">
                      <span className="text-primary group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-gray-700 dark:text-secondary font-medium">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-[#e4e0e0] dark:border-[#E5E7EB6E]">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-secondary uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label} href={social.href} target="_blank"
                    className="flex items-center justify-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 hover:scale-105 group"
                    aria-label={social.label}>
                    <span className="text-primary text-xl group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;