import React from 'react'
import aboutImg from '../assets/images/about.png';
import aboutCardImg from '../assets/images/about-card.png';
const Contact = () => {
  return (
    <div>
    <section>
      <div className='container'>
<div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
 {/*================about Img============ */}
<div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
<img src={aboutImg} alt=""/>

</div>

{/*===================About Section================ */}
<div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
<h2 className='heading'>Contact Us</h2>
<p className='text_para'><h4 className='text-bold text-2xl heading'>Located in:</h4>Town center 2 MUMBAI</p>
<p className='text_para'><h4 className='text-bold text-2xl heading'>Address:</h4>Town center 2, 505 Marol, off. Times Square, Andheri East, Mumbai, Maharashtra 400059</p>
<p className='text_para'><h4 className='text-bold text-2xl heading'>Contact No:</h4>8299478939</p>
<p className='text_para'><h4 className='text-bold text-2xl heading'>Google Location:</h4><iframe src="https://www.google.com/maps/d/embed?mid=1RA0uZs9qDrj-GRpmnXWagxNcgiw&hl=en_US&ehbc=2E312F" width="644" height="248" className='pt-4'></iframe></p>


</div>
</div>
      </div>

    </section>
  </div>
  )
}

export default Contact
