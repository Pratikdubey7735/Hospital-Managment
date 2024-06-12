import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import {Link} from 'react-router-dom';
import ServiceList from "../components/Services/ServiceList";
import About from '../pages/About/About';
import featureImg from '../assets/images/feature-img.png';
import {BsArrowRight} from 'react-icons/bs';
import DoctorList from '../components/Doctors/DoctorList';
const Home = () => {
  return (
    <>
      {/*===========Hero Section start==========*/}
     <section className='hero_section pt-[60px] 2xl:h-[800px]'>
 <div className='container'>
   <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

    {/*===========Hero Content==========*/}
<div>
  <div className='lg:w-[570px]'>
<h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
We help patients to live a healthy, longer and better life.
</h1>
<p className='text_para'>In the heart of healing, compassion is the best medicine, and kindness is the most soothing balm. Together, we create a sanctuary of care where hope blooms and resilience thrives.</p>
<Link 
to='/appointment' >
  <button className='btn'>Request An Appointment</button>
</Link>


  </div>


         {/*===================Hero Counter==================*/}
    
    <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

        <div>
        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>

        <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'>

        </span>
        <p className='text_para'>Years of Experience</p>
        </div>

        <div>
        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>

        <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'>

        </span>
        <p className='text_para'>Clinic Location</p>
        </div>

        <div>
        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>

        <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'>

        </span>
        <p className='text_para'>Patient Satisfaction</p>
        </div>


     </div>
  </div>

  { /*=========hero Content=========*/}

<div className='flex gap-[30px] justify-end'>
  <div>
    <img  className='w-full' src={heroImg01} alt="pqr" />
  </div>

  <div className='mt-[30px]'>
    <img src={heroImg02} alt="" className=' mb-[30px]'/>
    <img src={heroImg03} alt="" className=' '/>
  </div>

</div>


   
   
   </div>
 </div>
    </section>
{/*===========Hero Section End==========*/}

<section>
<div className="container">
  <div className='lg:w-[470px] mx-auto'>
    <h2 className='heading text-center'>Providing the best Medical Services</h2>
    <p className='text_para text-center'>World-class care for everyone. Our health System offers unmatched,expert health care.</p>
  </div>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
  <div className='py-[30px] px-5 '>
<div className='flex items-center justify-center'>
<img src={icon01} alt="" />
</div>
<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Search doctor according to your disease.</p>

<Link 
to='/doctors' 
className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
</div>

  </div>

  <div className='py-[30px] px-5 '>
<div className='flex items-center justify-center'>
<img src={icon02} alt="" />
</div>
<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Nearby Hospital in Varanasi</p>

<Link 
to='/contact' 
className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
</div>

  </div>

  <div className='py-[30px] px-5 '>
<div className='flex items-center justify-center'>
<img src={icon03} alt="" />
</div>
<div className='mt-[30px]'>
<h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book an Appointment</h2>
<p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Book a free appointment in nearby hospital.</p>

<Link 
to='/appointment' 
className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
</Link>
</div>

  </div>

</div>
</div>
</section>

<About/>

{/*=================Services section============= */}
<section>
  <div className='container'>
   <div className='xl:w-[470px] mx-auto'>
 <h2 className='heading text-center'> Our medical Services</h2>
 <p className='text_para text-center'> world-class care for everyone. our health system offers unmatched, expert health care</p>
   </div>
   <ServiceList/>
  </div>
</section>
{/*=================Services section End============= */}


{/*=================Feature section Start============= */}
<section>
  <div className='container'>
<div className="flex items-center justify-between flex-col lg:flex-row">

  {/*=================Feature content=============== */}
  <div className='xl:w-[670px]'>
<h2 className='heading'>Get Virtual treatment <br/> anytime.</h2>
<ul className='pl-4'>
  <li className='text_para'>1.Schedule the appointment directlt</li>
  <li className='text_para'>2.Search for your physician here, and contact their offices.</li>
  <li className="text_para">3.View our physician who are accepting new patients,use the online scheduling tool to select an appointment time.</li>
</ul>
  </div>
{/*=================Feature img=============== */}
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
  <img src={featureImg} className="w-3/4" />
</div>
</div>
  </div>
</section>
{/*=================Feature section End=============== */}
{/*=================Our Team Members Start=============== */}
<section>
  
  <div className='container'>
   <div className='xl:w-[470px] mx-auto'>
 <h2 className='heading text-center'> Our Great Doctors</h2>
 <p className='text_para text-center'> world-class care for everyone. our health system offers unmatched, expert health care</p>
   </div>
   <DoctorList/>
  </div>
</section>
{/*=================Our Team Members End=============== */}

   </>
  )
}
export default Home
