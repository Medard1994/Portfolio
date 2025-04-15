import { FaFacebookF } from "react-icons/fa"
import { MdOutlineContactPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTumblr } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date () .getFullYear();
return (
  <main className="flex gap-x-10 my-[10px]">
    <footer className="bg-gray-800 text-white flex gap-2 
   justify-center h-auto rounded-md w-[100%] ">
    <ul className="flex-col ">
    <div className="flex mx-3">
    <FaFacebookF />
    <p className="font-bold">:nizigama Medard uwitonze</p>
    </div>
    <div className="flex gap-x-4 ">
    <MdOutlineContactPhone  />

    <p className="font-bold">:0790212088</p>
    </div>
    <div className="flex gap-x-4 ">
    <FaWhatsapp />
    <p>:0780039928</p>
    </div>
    </ul>

    <ul className="flex-col mx-60">
    <div className="flex">
<MdEmail />
 <p>:nimedard29@gmail.com</p>
</div> 
<div className="flex">
<FaTumblr  />

 <p>:medard niz pro</p>
</div>
<div className="flex">
<FaInstagram />

 <p>:medardnizigama</p>
</div>
    </ul>
      
    
 
    <p>&copy; All rights reserved {currentYear}</p>
  </footer>
  </main>
 
)
}

export default Footer;