'use client';

import "../styles/global.css"
import "../styles/links.css"

import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {

   return (
      <footer className="bg-white p-4 border-t-4 mt-5 border-primaryMacaulay md:p-6">

         {/* Holds the columns of items */}
         <div className="grid grid-cols-2 sm:grid-cols-5 px-[10%]">

            <div>
               <ul className="mb-4">
                  <li className="text-primaryMacaulay">
                     <Link href=""> News </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Opinion </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Sports </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Arts </Link>
                  </li>

               </ul>
            </div>

            <div>
               <ul className="mb-4">
                  <li className="text-primaryMacaulay">
                     <Link href=""> News </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Opinion </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Sports </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Arts </Link>
                  </li>

               </ul>
            </div>

            <div>
               <ul className="mb-4">
                  <li className="text-primaryMacaulay">
                     <Link href=""> News </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Opinion </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Sports </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Arts </Link>
                  </li>

               </ul>
            </div>

            <div>
               <ul className="mb-4">
                  <li className="text-primaryMacaulay">
                     <Link href=""> News </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Opinion </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Sports </Link>
                  </li>

                  <li className="text-primaryMacaulay">
                     <Link href=""> Arts </Link>
                  </li>

               </ul>
            </div>

            {/* The social media logos */}
            <div className="flex">
               <div className="inline mx-2 pt-1">
                  <Link href="">
                     <Image
                        priority
                        src="/images/gmail_white.svg"
                        height={24}
                        width={24}
                        alt="GM"
                     />                  
                  </Link>
               </div>

               <div className="inline mx-2 pt-1">
                  <Link href="">
                     <Image
                        priority
                        src="/images/instagram_white.svg"
                        height={24}
                        width={24}
                        alt="GM"
                     />                  
                  </Link>
               </div>

               <div className="inline mx-2 pt-1">
                  <Link href="">
                     <Image
                        priority
                        src="/images/tiktok_white.svg"
                        height={24}
                        width={24}
                        alt="GM"
                     />                  
                  </Link>
               </div>
            </div>


         </div>

         <br />

         {/* Bottom  */}
         <div className="flex justify-center pt-2">
            <span className="text-primaryMacaulay">© 2023 The Macaulay Messenger</span>
         </div>

      </footer>
   );

}

export default Footer;