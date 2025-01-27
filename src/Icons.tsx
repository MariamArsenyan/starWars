import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';

export const Icons = () => {
  return (
    <div className="icons font-exo-2 flex absolute top-0  m-2 gap-2 text-[30px] text-gray-500">
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
  )
}

