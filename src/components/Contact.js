import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="bg-gray-600 flex justify-end relative h-[560px]">
        <img src="https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/images/2018-02-21-15-54-31-96dbcb.png" className='h-full w-full object-cover' alt="google map img"/>
        <form action="" className="bg-white rounded-lg text-black w-[28rem] absolute p-8 me-24 -top-8">
          <h3 className="font-extrabold text-3xl font-sans">Contact Form</h3>
          <p className="text-base text-gray-700 pb-6 pt-2">Message me now if you have any question.</p>
          <input className="mb-6 outline-none w-full py-2.5 border-b border-gray-300 focus:border-gray-500" placeholder="Full Name" type="text" name="name" id="name" />
          <input className="mb-6 outline-none w-full py-2.5 border-b border-gray-300 focus:border-gray-500" placeholder="Your Email" type="email" name="email" id="email" />
          <input className="mb-6 outline-none w-full py-2.5 border-b border-gray-300 focus:border-gray-500" placeholder="Phone number" type="text" name="phone" id="phone" />
          <textarea className="mb-6 resize-none outline-none w-full py-2.5 border-b border-gray-300 focus:border-gray-500" placeholder="Message" name="" id=""></textarea>
          <button type="button" className="font-semibold w-full text-center rounded-md bg-red-500 py-4 text-white mt-6">Send Message</button>
        </form>
      </div>
      <div className='px-24 py-10 bg-gray-950'>
        <ul className="mb-6 md:mb-0 flex flex-col md:flex-row justify-between">
          <li className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="h-6 w-6">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path
                  d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                </path>
              </svg>
            </div>
            <div className="ml-4 mb-4">
              <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
              </h3>
              <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
              <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
            </div>
          </li>
          <li className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="h-6 w-6">
                <path
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                </path>
                <path d="M15 7a2 2 0 0 1 2 2"></path>
                <path d="M15 3a6 6 0 0 1 6 6"></path>
              </svg>
            </div>
            <div className="ml-4 mb-4">
              <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
              </h3>
              <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
              <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
            </div>
          </li>
          <li className="flex">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 7v5l3 3"></path>
              </svg>
            </div>
            <div className="ml-4 mb-4">
              <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                hours</h3>
              <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
              <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact