import { FunctionComponent } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { card } from "@/tailwindvariant/Tailwindvariant";

const Footer : FunctionComponent = ()=>{
   const {footer_heading , footer_par} = card()

    return (
<>
<div className='bg-green-500 text-white w-full h-[400px] mt-4 p-7'>
      <div className='flex items-center justify-between p-12'>
        <div className='flex flex-col items-start'>
            <h3 className={footer_heading()}>For Business</h3>
            <p className={footer_par()}>Team Meal And Munices Pack</p>
            <p className={footer_par()}>Collaboration</p>
            <p className={footer_par()}>Food Voucher And Gift</p>
            <p className={footer_par()}>Lunch And Cakes</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className={footer_heading()}>Our Services</h3>
            <p className={footer_par()}>TCustomized Bulk Menus</p>
            <p className={footer_par()}>Stalls And Outdoor Catering</p>
            <p className={footer_par()}>Full Fledeged Mart</p>
            <p className={footer_par()}>24 Hours Delivery</p>
            <p className={footer_par()}>State of Art Kitchen</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className={footer_heading()}>The Company</h3>
            <p className={footer_par()}>Customer Service</p>
            <p className={footer_par()}>Our Vision</p>
            <p className={footer_par()}>About Us</p>
        </div>
        <div className='flex flex-col items-start'>
            <h3 className={footer_heading()}>Location</h3>
            <p className={footer_par()}>Kathmandu</p>
            <p className={footer_par()}>Pokhara</p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8 mx-9'>
              <BsFacebook size={30} className='cursor-pointer hover:text-blue-700'/>
              <BsTwitter size={30} className='cursor-pointer hover:text-blue-300'/>
              <BsYoutube size={30} className='cursor-pointer hover:text-red-700'/>
              <BsInstagram size={30} className='cursor-pointer hover:text-purple-700'/>
          </div>
          <div className='flex items-center'>
            <img className='w-[170px] cursor-pointer' src="src/img/pic1.svg" alt="Payeent Picture" />
            <img className='w-[170px] h-[85px] cursor-pointer' src="src/img/pic2.png" alt="Get It On App Store" />
          </div>
      </div>
      <div className='w-full h-[3px] bg-white'></div>
      <p className='text-center'> &copy; Rohan Khatiwada 2023 , First Intern React Project</p>
    </div>
</>
    )
}

export default Footer