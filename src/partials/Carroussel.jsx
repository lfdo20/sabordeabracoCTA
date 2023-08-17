import React, {useState} from 'react';
import foto1 from '../images/Foto1.webp';
import foto2 from '../images/Foto2.webp';
import foto3 from '../images/Foto3.webp';
import foto4 from '../images/Foto4.webp';
import foto5 from '../images/Foto5.webp';

function Carroussel() {

    const slides = [
        foto1,
        foto2,
        foto3,
        foto4,
        foto5,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    return (
        <section className="relative xs:my-10 md:my-22 lg:my-34">
            <div className="relative w-11/12 mx-auto overflow-hidden">
                <div className="relative w-full max-h-fit transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none bvhid">
                    <img src={slides[currentIndex]} className="block object-contain mx-auto max-h-[600px]" alt="..." />
                </div>
                <div className='absolute inset-0 flex flex-row items-center justify-between xs:p-3 p-8'>
                    <button className="items-center justify-center p-1 rounded-full text-center text-saab-200 bg-white border border-saab-200 opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" onClick={prevSlide} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="xs:h-3 xs:w-3 h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                            </svg>
                    </button>
                    <button className="items-center justify-center p-1 rounded-full text-center text-saab-200 bg-white border border-saab-200 opacity-90 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" onClick={nextSlide} type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="xs:h-3 xs:w-3 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Carroussel;