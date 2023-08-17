import React, {useState} from "react";
import Logo from '../images/logo_saab.png';
 

function Sendmail(from){
    console.log('tt1 - ' + from);
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lfdo.dev@gmail.com",
        Password : "00424D602DE6EA75A17A3DB4912B5A4F1C24",
        To : 'lfdo20@gmail.com',
        From : 'lfdo.dev@gmail.com',
        Subject : "Email: " + from,
        Body : "Email: "+ from
    }).then(
    message => alert("Email Enviado.")
    );
}
function Title() {
    const [from, setFrom] = useState({email:''});
    function handleChange(e){
        setFrom({name: e.target.value});
    }

    function handleClick(){
        Sendmail(from.name);
    }

    return(
        <section className="relative text-white" data-aos="zoom-y-out" data-aos-delay="50">
            <div className="md:max-w-full mx-auto">
            <div className="xs:w-[150px] md:w-[255px] lg:w-[320px] h-full z-1 absolute xs:mt-[-15px] xs:ml-[-48px] md:mt-[-23px] md:ml-[-7px] lg:ml-[24px] lg:mt-[38px] xl:ml-[168px] xl:mt-[38px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.26 119.5">
                    <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g className="cls-1" opacity={'0.2'}>
                        <path className="cls-2" fill='#7f3f98' d="M144.08,8.89q-9,16-18.05,32l.45.65L157.66,30l.37.5c-7.21,8.5-14.41,17-22.07,26.06l39.28,6.59,0,.6L127,69.92,137.14,82l-29.7-.19c-.31,4.21-.61,8.24-.94,12.64L86,90.12c-2.67,9.72-5.26,19.19-8,29.38-1.36-2.17-2.44-3.8-3.42-5.49-2.58-4.48-5.24-8.91-7.6-13.5-1.19-2.33-2.27-2.59-4.48-1.29-11,6.48-22.11,12.82-33.18,19.2a7.33,7.33,0,0,1-3,1L50.42,90l-.27-.67-25.8,5.77L39.87,77.55,0,71.8v-.74l46.57-9.69-12-23.61,28.75,5.75C64.3,28.92,65.21,14.6,66.11.27L66.77,0,86.18,30.47C91.91,21.94,97.36,13.82,102.8,5.7l.6.09c.28,9.41.56,18.82.86,28.86L143.63,8.39Z"/>
                        </g>
                    </g>
                    </g>
                </svg>
                <h1 className="font-museo xs:-mt-[72px] md:-mt-[123px] lg:-mt-[146px] xl:-mt-[155px] -mt-[150px] xs:pr-[.7rem] pr-5 lg:pr-[1rem] mx-auto -rotate-[30deg] text-3xl text-saab-200 xs:text-[0.56rem] sm:text-[0.9rem] md:text-[0.9rem] xl:text-[1.1rem]">
                    Descontos!<br/>10% primeira compra<br/>10% por indicação*
                </h1>
            </div>
                <div className="relative flex flex-col items-start">
                    <img className="mx-auto my-10 xs:w-[155px] sm:w-[200px] md:w-[260px] w-[300px] h-auto" src={Logo} alt="Testimonial 01" />
                    <h1 className="font-belinda strkfont mx-auto xs:text-[2.7rem] text-3xl md:leading-[4.6rem] text-saab-100 md:text-[4.4rem] lg:text-8xl lg:my-10">O melhor brownie de Brasília <wbr/> está de volta!</h1>
                </div>
            </div>
        </section>
    );
}
export default Title;
    