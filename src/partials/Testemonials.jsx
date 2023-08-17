import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl text-gray-300 mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-16 font-opensans text-saab-100">O que nossos clientes dizem</h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.08 80.96">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g className='cls-1' opacity={'0.2'}>
                      <path className='cls-2' fill='#7f3f98' d="M1.6,2.6C-.92.08-.69.11,3.92.11H6.75c64,0,128,.09,191.92-.11,8.41,0,12.55,4.8,12.41,12.54-.33,18.17-.18,36.36-.05,54.54C211,77.27,208.15,81,199.68,81c-55.41-.07-122.36,0-177.77-.08C12.56,80.88,9,77.42,9,66.92c0-17.78,0-33.7-.05-51.47C8.94,8.23,5.58,6,1.6,2.6Z"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            
          </div>
          
          {/* Testimonials */}
          {/*
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
          */}
              {/* Testimonial */}
              {/*
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src={TestimonialImage} width="96" height="96" alt="Testimonial 01" />
                </div>
                */}
                {/*
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>

            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;