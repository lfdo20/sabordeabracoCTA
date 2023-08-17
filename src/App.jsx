import '../index.css'

import HeroHome from '../src/partials/HeroHome';
//import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../src/partials/FeatureBlocks';
import Testemonials from '../src/partials/Testemonials';
import Newsletter from '../src/partials/Form';
import Title from '../src/partials/Title';
import Footer from '../src/partials/Footer';
import Carr from '../src/partials/Carroussel'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import wppicon from '../src/images/wppicon.svg'

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	//<HeroHome /> <Newsletter />
	return (
		<div className="min-h-screen flex flex-col">
			<main className="xs:container xs:mx-auto xs:px-0 px-6 xs:pt-8 pt-16 flex-1 text-center">
				<Title />
				<Carr />
       			<FeaturesBlocks />
				<Testemonials />
				<Footer />
			</main>
			<a
				href="https://wa.me/5561994625455"
				id="wppclose"
				className="whatsapp_float"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={wppicon} className=""></img>
			</a>
		</div>	
	)
}

export default App
