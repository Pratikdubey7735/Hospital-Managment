import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Appointment = () => {
  const [formData, setFormData] = useState({
    Name: '',
    gender: 'Male',
    email: '',
    mobno: '',
    address: '',
    disease: 'Gastrointestinal Disease',
    date: '',
  });

  const [isSlotAvailable, setIsSlotAvailable] = useState(true);
  const [availableSlotCount, setAvailableSlotCount] = useState(5);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    const truncatedValue = numericValue.slice(0, 10);
    setFormData({ ...formData, [name]: truncatedValue });
  };

  const isDateValid = (selectedDate) => {
    const currentDate = new Date();
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(currentDate.getDate() + 2);

    const selectedDateObj = new Date(selectedDate);

    return selectedDateObj >= currentDate && selectedDateObj <= dayAfterTomorrow;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isDateValid(formData.date)) {
      console.error('Invalid appointment date');
      return;
    }

    if (!isSlotAvailable) {
      console.error('No free slot available for today');
      return;
    }

    try {
      await axios.post('https://backend-o0qh.onrender.com/api/submitFormData', formData);
      console.log('Form data submitted successfully');
      window.alert('Form data submitted successfully! Please complete Payment to confirm your appointment');
      setAvailableSlotCount((prevCount) => Math.max(0, prevCount - 1));
      window.location.reload();
    } catch (error) {
      console.error('Error in submitting Form Data', error);
      window.alert('Error submitting form data. Please try again.');
    }
  };

  useEffect(() => {
    if (formData.date) {
      fetchAppointmentsCount(formData.date);
    }
  }, [formData.date]);

  const fetchAppointmentsCount = async (selectedDate) => {
    try {
      const response = await axios.get(`https://backend-o0qh.onrender.com/api/appointmentsCount?date=${selectedDate}`);
      const appointmentsCount = response.data.count;
      setIsSlotAvailable(appointmentsCount < 5);
    } catch (error) {
      console.error('Error fetching appointments count:', error);
    }
  };
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
          Book Your <span className='text-primaryColor'>Appointment</span> Now
        </h3>
        <form className='py-4 md:py-0' onSubmit={handleSubmit} autoComplete="off">
          <div className='mb-5'>
            <input
           type='name'
             placeholder='Enter Your Name'
              name='Name'
      value={formData.Name}
              onChange={handleChange}
            className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
              required
            />
            <div className='mb-5'>
              <input
                type='email'
                placeholder='Enter Your Email'
                name='email'
              value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                required
              />
              <input
                 type='text'
           placeholder='Enter Your Address'
                  name='address'
              value={formData.address}
                onChange={handleChange}
           className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                required
              />

               <input
                type='date'
                placeholder='Enter Your Appointment Date'
                name='date'
                min={(new Date(new Date().getTime() + 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                max={(new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                required
              />
               {!isSlotAvailable && (
                <p className='text-red-500'>No free slot available for today. Please choose another date.</p>
              )}
              <input
                type='text'
                placeholder='Enter Your Mobile Number'
                name='mobno'
                minLength={10}
               value={formData.mobno}
                onChange={handleInputChange} 
                className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md'
                required
              />
              <label htmlFor='' className='text-headingColor font-bold text-[16px] leading-7'>
                Select Gender:
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>
              </label>
              <div>
                <label htmlFor='' className='text-headingColor font-bold text-[16px] leading-7'>
                  Select Disease:
                  <select
                    name='disease'
                    value={formData.disease}
                    onChange={handleChange}
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value='gastrointestinal Disease'>Gastrointestinal Disease</option>
                    <option value='Skin Diseases'>Skin Disease</option>
                    <option value='Renal (Kidney) Disease'>Renal (Kidney) Diseases</option>
                    <option value='Musculoskeletal Diseases'>Musculoskeletal Disease</option>
                    <option value='Mental Health Disorders'>Mental Health Disorder</option>
                    <option value='Respiratory Diseases'>Respiratory Disease</option>
                    <option value='Cardiovascular Diseases'>Cardiovascular Disease</option>
                  </select>
                </label>
              </div>
            </div>
            <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                 Book Now
              </button>
            </div>
            <div className='mt-7'>
              <button type='submit' className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                <a href="https://rzp.io/l/LOMnU0Oe"> Pay Now</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Appointment;
