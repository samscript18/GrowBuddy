// import type { Metadata } from 'next';
// import './globals.css';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

// export const metadata: Metadata = {
//   title: {
//     default: 'GrowBuddy',
//     template: 'GrowBuddy | %s',
//   },
//   description: 'GrowBuddy - Expert Agricultural Guidance for Modern Farmers',
// };

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
