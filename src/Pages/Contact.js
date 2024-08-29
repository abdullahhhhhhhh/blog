import React from 'react';

function Contact() {
  return (
    <div className="contact-block rounded-lg shadow-md overflow-hidden">
       <div className='py-40 bg-black text-white text-center'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>
            Contact Us
        </h2>
      </div>
      <div className="contact-info px-8 py-10 flex flex-col items-center justify-center bg-gray-200">
        
        <p className="text-lg mb-5 text-center">
          Get in touch with us and let's discuss your project!
        </p>
        <ul className="contact-list space-y-4 text-center">
          <li>
            <a
              href="mailto:youremail@example.com"
              className="text-amber-500 hover:underline"
            >
              youremail@example.com
            </a>
          </li>
          <li>
            <a href="tel:+9998887776" className="text-amber-500 hover:underline">
              +999-888-7776 (Phone)
            </a>
          </li>
          <li>
            <a href="https://www.yourcompany.com" className="text-amber-500 hover:underline">
              Company Website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
