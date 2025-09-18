import Image from 'next/image';
import { Button } from '../button';
import { heroImg } from '@/public/images';

const Hero = () => {
	return (
		<section id="home" className="bg-[#E5E7EB] py-16 lg:py-24 w-full">
			<div className="px-4 sm:px-8 lg:px-16 pt-16">
				<div className="grid lg:grid-cols-2 gap-12 items-center max-md:mt-8">
					<div className="space-y-6">
						<h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight max-md:text-center">
							Expert Agricultural Guidance for Modern Farmers
						</h1>

						<p className="text-lg text-[#4B5563] leading-relaxed max-md:text-center">
							Connect with agricultural experts, access cutting-edge farming techniques, and grow your business
							with data-driven insights tailored for your farm.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="bg-primary hover:bg-primary/90 text-white px-8 py-5.5 cursor-pointer font-normal">
								Get Started
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-5.5 cursor-pointer bg-transparent font-normal">
								Learn More
							</Button>
						</div>
					</div>

					<Image
						src={heroImg}
						alt="hero-img"
						width={584}
						height={320}
						className="w-full lg:w-[584px] object-contain"
					/>
				</div>
			</div>
		</section>
	);
};
export default Hero;
