import { BarChart3, Droplets, Shield } from 'lucide-react';

export const Services = () => {
	const services = [
		{
			icon: BarChart3,
			title: 'Crop Analytics',
			description:
				'Advanced data analysis to optimize crop yields and predict market trends for better decision making.',
		},
		{
			icon: Droplets,
			title: 'Irrigation Planning',
			description:
				'Smart irrigation solutions and water management strategies to conserve resources and boost productivity.',
		},
		{
			icon: Shield,
			title: 'Pest Management',
			description:
				'Integrated pest management solutions using sustainable practices and cutting-edge technology.',
		},
	];

	return (
		<section id="services" className="py-16 bg-white">
			<div className="px-4 sm:px-8 lg:px-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Comprehensive agricultural support designed to maximize your farm&#39;s potential and profitability
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-[#E5E7EB] p-6 rounded-lg hover:scale-[1.05] cursor-pointer transition-all">
							<div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
								<service.icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-primary mb-4">{service.title}</h3>
							<p className="text-[#4B5563] mb-6 leading-relaxed text-sm">{service.description}</p>
							<a href="#" className="text-[#87A96B] text-sm font-medium hover:text-primary transition-colors">
								Learn More →
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
