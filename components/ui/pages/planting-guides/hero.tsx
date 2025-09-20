import { Search } from 'lucide-react';
import { Button } from '../../button';
import { Input } from '../../input';
import Image from 'next/image';
import { heroImg2 } from '@/public/images';

const Hero = () => {
	return (
		<section className="py-10 bg-gradient-to-br from-[#F0FDF4] to-[#EFF6FF]">
			<div className="px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 lg:pt-12">
				<div className="space-y-8">
					<div className="space-y-4">
						<h1 className="text-3xl lg:text-4xl font-bold text-[#111827] leading-tight max-md:text-center">
							Smart Farming Advice for Nigerian Farmers
						</h1>
						<p className="text-lg text-[#4B5563] leading-relaxed max-md:text-center">
							Get planting guides based on your soil, region, and rainfall forecast.
						</p>
					</div>

					<div className="space-y-4">
						<div className="relative">
							<Input
								placeholder="Enter your LGA or use GPS"
								className="flex-1 h-14 text-base border-none outline-none bg-white text-black focus:outline-none focus:border-none focus-visible:ring-primary rounded-full"
							/>
							<Button className="h-12 w-[30%] lg:w-[25%] absolute top-1 right-1.5 px-10 bg-primary hover:bg-primary/90 font-normal cursor-pointer rounded-full">
								<Search className="w-4 h-4 mr-2" />
								Search
							</Button>
						</div>

						{/* <button className="flex items-center gap-2 text-primary hover:text-primary/90 font-medium">
							<MapPin className="w-4 h-4" />
							Use my current location
						</button> */}
					</div>
				</div>

				<div className="flex justify-center items-center">
					<Image
						src={heroImg2}
						alt="hero-img"
						width={512}
						height={280}
						className="object-contain rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
