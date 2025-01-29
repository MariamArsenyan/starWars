import React from "react";
import { TiSocialTwitter, TiSocialYoutube, TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";

const socialLinks = [
  { icon: TiSocialFacebook, href: "#" },
  { icon: TiSocialInstagram, href: "#" },
  { icon: TiSocialTwitter, href: "#" },
  { icon: TiSocialYoutube, href: "#" },
];

const footerLinks = [
  "Terms of Use",
  "Privacy Policy",
  "Children's Online Privacy Policy",
  "Your US State Privacy Rights",
  "Disney Store",
  "Star Wars Helpdesk",
  "Interest-Based Ads",
];

export const Footer: React.FC = () => (
  <footer className="bg-slate-700 text-white py-8">
    <div className="flex flex-col items-center">
      <div className="flex gap-2 text-[30px] text-gray-500 mt-[-20px]">
        {socialLinks.map(({ icon: Icon, href }, idx) => (
          <a key={idx} href={href} className="hover:text-[#fade4b] transition-all">
            <Icon />
          </a>
        ))}
      </div>
      <ul className="flex flex-wrap justify-center gap-4 text-center m-6">
        {footerLinks.map((link, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-gray-400 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-center text-sm text-gray-500">
        <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <p>Do Not Sell or Share My Personal Information</p>
      </div>
    </div>
  </footer>
);
