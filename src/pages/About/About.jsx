import React from 'react'
import {Link} from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';
const About = () => {
  return (
    <div>
      <section>
        <div className='container'>
<div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
   {/*================about Img============ */}
<div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
<img src={aboutImg} alt=""/>
<div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>

</div>
</div>

{/*===================About Section================ */}
<div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 pt-[150px]'>
  <h2 className='heading '>Proud to be one of the Nations Best</h2>
  <p className='text_para'>For 30 years in a row, U.S. News and World Report has recognised us as one of the best publics hospitals in the Nation and #1 in Texas.</p>

  <p className='text_para mt-[30px]'>Our best is something we strive for each day, caring for our patients-most looking back at what we accomplished but towards what we can do tomorrow. Providing the best.</p>
  
</div>
</div>
        </div>

      </section>
    </div>
  )
}

export default About
