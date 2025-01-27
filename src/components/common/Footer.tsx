import React from 'react';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 text-white py-8">
     
      <div className="flex flex-col items-center">
        
        <div className="icons font-exo-2 flex absolute  mt-[-20px] gap-2 text-[30px] text-gray-500">
        <a
          href="#"
          className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
        >
          <TiSocialFacebook className="hover:text-[#fade4b]" />
        </a>
        <a
          href="#"
          className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
        >
          <TiSocialInstagram className="hover:text-[#fade4b]" />
        </a>
        <a
          href="#"
          className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
        >
          <TiSocialTwitter className="hover:text-[#fade4b]" />
        </a>
        <a
          href="#"
          className="hover:text-white transition-all hover:border-b hover:border-[#fade4b]"
        >
          <TiSocialYoutube className="hover:text-[#fade4b]" />
        </a>
      </div>

        <ul className="flex flex-wrap justify-center gap-4 text-center m-6">
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Children's Online Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Your US State Privacy Rights
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Disney Store
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Star Wars Helpdesk
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Interest-Based Ads
            </a>
          </li>
        </ul>
        <div className="text-center text-sm text-gray-500">
          <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
          <p>Do Not Sell or Share My Personal Information</p>
        </div>
      </div>
    </footer>
  );
};
