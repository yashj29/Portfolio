import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";



const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> */}
        <h1 className="text-3xl font-extrabold font-Ovo tracking-wide text-black-600 dark:text-black-500 transition-transform">
          YashJain
          <span className="h-2 w-2 bg-red-600 dark:bg-red-500 rounded-full inline-block"></span>
        </h1>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          yashj2k03@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>{`\u00A9`} 2025 Yash Jain. All rights reserved.</p>
        
        <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0'>
          <li><a target="_blank" href="https://github.com/yashj29"><Github className="w-6 h-6 hover:scale-125 transition-transform duration-300" /></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/yashj29/"><Linkedin className="w-6 h-6 hover:scale-125 transition-transform duration-300" /></a></li>
          <li><a target="_blank" href="https://x.com/Yash_Jn29"><FaXTwitter className="w-6 h-6 hover:scale-125 transition-transform duration-300" /></a></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
