import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="lg:max-w-8xl lg:mx-auto">
        <div className="relative flex flex-col items-start">
          <div className='container xs:w-[8px] md:w-[12px] lg:w-[15px] z-1 absolute xs:mt-[23px] md:mt-[58px] xl:mt-[69px] lg:mt-[60px] 2xl:ml-[1046px] xl:ml-[915px] lg:ml-[722px] md:ml-[575px] xs:ml-[256px]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#AD7826' viewBox="0 0 4.36 3.22">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-1" d="M3.08,0a4.92,4.92,0,0,1,.49.56,6.32,6.32,0,0,1,.79,1.72L3.07,1.11,0,3.22Z"/>
                    </g>
                </g>
              </svg>
          </div>
          <h2 className=" font-ballet xs:my-4 my-10 mx-auto text-2x1 tracking-wider text-saab-100 xs:text-[25px] md:text-[55px] xl:text-6xl lg:text-[60px] mb-8">Brownie de chocolate com amendoas</h2>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-8">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-start p-6 bg-saab-100/10 rounded-lg shadow-xl transition-opacity duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:bg-saab-100/20 hover:outline-none focus:no-underline focus:bg-saab-100/20 focus:outline-none motion-reduce:transition-none">
              <div className='lg:w-[13px] md:w-[8px] xs:w-[8px] h-full z-1 absolute xs:mt-[21px] mt-[34px] md:ml-[104px] md:mt-[22px] xs:ml-[87px] lg:mt-[28px] lg:ml-[136px] xl:mt-[33px] xl:ml-[170px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0A4466' viewBox="0 0 6.4 1.56">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M6.4.66C4.17,2.54,2.25.87,0,.93,2.2-.9,4.14.52,6.4.66Z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <h2 className=" font-ballet my-2 tracking-wider text-saab-200 xs:text-[1.7rem] md:text-3xl lg:text-4xl xl:text-5xl">Por que tao grande<span className='font-pacifico xs:text-[1.3rem] md:text-2xl lg:text-2xl'>!?</span><span className='xs:text-[1.1rem] md:text-[18px] lg:text-2xl'>(17cm)</span></h2>
              <div className='font-lobster flex flex-col items-start xs:pl-4 pl-8 tracking-wider text-saab-300 xs:text-xl md:text-[1.35rem] lg:text-3xl mb-8'>
                <p>Pra presentear</p>
                <p>Pra congelar fatias</p>
                <p>Pra comer de uma vez só</p>
                <p>Pra receber família e amigos</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-start p-6 bg-saab-100/10 rounded-lg shadow-xl">
              <div className='lg:w-[13px] md:w-[8px] xs:w-[8px] h-full z-1 absolute xs:mt-[27px] md:mt-[22px] xs:ml-[87px] mt-[34px] md:ml-[106px] lg:mt-[28px] lg:ml-[136px] xl:mt-[33px] xl:ml-[170px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#0A4466' viewBox="0 0 6.4 1.56">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M6.4.66C4.17,2.54,2.25.87,0,.93,2.2-.9,4.14.52,6.4.66Z"/>
                    </g>
                  </g>
                </svg>
              </div>
              <h2 className=" font-ballet my-2 tracking-wider text-saab-200 xs:text-[1.7rem] md:text-3xl lg:text-4xl xl:text-5xl">Por que tao bom<span className='font-pacifico md:text-2xl lg:text-2xl'>!?</span></h2>
              <div className='font-lobster flex flex-col items-start xs:pl-4 pl-8 tracking-wider text-saab-300 xs:text-xl md:text-[1.35rem] lg:text-3xl mb-8'>
                <p>Muito mais chocolate</p>
                <p>Muito mais textura</p>
                <p>Muito mais sabor</p>
                <p>Ingredientes selecionado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;