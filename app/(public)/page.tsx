import Home from '@/components/ui/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
	description:
		'Connect with agricultural experts, access cutting-edge farming techniques, and grow your business with data-driven insights tailored for your farm.',
};

const Page = () => <Home />;

export default Page;
