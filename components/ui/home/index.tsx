import { Navbar } from '@/components/layout/navbar';
import Hero from './hero';
import { Services } from './services';
import { Stats } from './stats';
import { Footer } from '@/components/layout/footer';
import Resources from './resources';
import { CTA } from './cta';

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Stats />
			<Resources />
			<CTA />
			<Footer />
		</>
	);
};
export default Home;
