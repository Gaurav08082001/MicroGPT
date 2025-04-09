import {
    Linkedin,
    Twitter,
    Instagram,
    Send,
    Music,
    Youtube,
    CircleDot,
  } from "lucide-react";
  import Image from "next/image";
  
  export default function Footer() {
    return (
      <footer className="text-white px-15 py-24 h-screen">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10  border-gray-800 pb-10">
          {/* Left Section */}
          <div className="space-y-5 col-span-2">
            <div className="flex items-center gap-2">
            <Image src="/logo.png"  className="transition-transform duration-500 hover:scale-110" alt="Hero Image" width={150} height={10} />
              {/* <span className="text-2xl font-bold">MICROGPT</span> */}
            </div>
            <p className="text-purple-400 text-lg font-bold">
              AUDITED BY <span className="text-orange-400">ASSUREDEFI</span>
            </p>
            <p className="text-m text-gray-400 font-bold">
              Enhance your coding experience while earning rewards.
            </p>
            <div className="flex gap-6 text-m font-bold">
              <a href="#" className="hover:text-gray-400">Join Community</a>
              <a href="#" className="hover:text-gray-400">Download</a>
            </div>
            <div className="text-m text-gray-500 pt-4">
              <p>Address:</p>
              <p>
                Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro,
                Republic of the Marshall Islands MH 96960
              </p>
            </div>
          </div>
  
          {/* Platform */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-gray-400">Platform</h4>
            <ul className="space-y-1 text-m">
              <li className="hover:text-gray-400"><a href="#">Home</a></li>
              <li className="hover:text-gray-400"><a href="#">Innovators</a></li>
              <li className="hover:text-gray-400"><a href="#">FAQ</a></li>
            </ul>
          </div>
  
          {/* External Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-gray-400">External Links</h4>
            <ul className="space-y-1 text-m">
              <li className="hover:text-gray-400"><a href="#">Whitepaper</a></li>
              <li className="hover:text-gray-400"><a href="#">Pitchdeck</a></li>
              <li className="hover:text-gray-400"><a href="#">Impression</a></li>
            </ul>
          </div>
  
          {/* Legal Links */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-gray-400">Legal Links</h4>
            <ul className="space-y-1 text-m">
              <li className="hover:text-gray-400"><a href="#">Disclaimer</a></li>
              <li className="hover:text-gray-400"><a href="#">Privacy Policy</a></li>
              <li className="hover:text-gray-400"><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
          <p className="text-m text-gray-500">© Copyright 2024. All rights reserved</p>
          <div className="flex gap-4 cursor-pointer">
            {[
              <Linkedin key="linkedin" />,
              <Twitter key="twitter" />,
              <Instagram key="ig" />,
              <Send key="tg" />,
              <Music key="tt" />,
              <CircleDot key="medium" />,
              <Youtube key="yt" />,
            ].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  