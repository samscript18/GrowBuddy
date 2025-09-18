import Image from 'next/image';
import { Card, CardContent, CardHeader } from '../card';
import { resourceImg1, resourceImg2, resourceImg3 } from '@/public/images';

const resources = [
	{
		id: 1,
		title: 'Research Reports',
		content: 'Access comprehensive agricultural research and market analysis reports.',
		image: resourceImg1,
	},
	{
		id: 2,
		title: 'Webinars',
		content: 'Join live sessions with agricultural experts and industry leaders.',
		image: resourceImg2,
	},
	{
		id: 3,
		title: 'Mobile Tools',
		content: 'Download our mobile app for on-the-go farm management and monitoring.',
		image: resourceImg3,
	},
];

const Resources = () => {
	return (
	<section id="resources" className="py-16 px-4 bg-white">
		<div className="px-4 sm:px-8 lg:px-16">
			<div className="text-center mb-12">
				<h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Knowledge Resources</h2>
				<p className="text-[#4B5563] text-lg max-w-2xl mx-auto">
					Stay updated with the latest agricultural insights and best practices
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{resources.map((resource) => {
					return (
						<Card
							key={resource.id}
							className="bg-white border-0 shadow-sm hover:shadow-md p-0 gap-0 hover:scale-[1.05] cursor-pointer transition-all">
							<CardHeader className="p-0 gap-0">
								<Image
									src={resource.image}
									alt={resource.title}
									width={384}
									height={192}
									className="w-full h-full object-cover rounded-t-lg"
								/>
							</CardHeader>
							<CardContent className="p-6 bg-[#E5E7EB] rounded-b-lg">
								<h3 className="text-lg font-medium text-primary mb-3">{resource.title}</h3>
								<p className="text-[#4B5563] mb-4 text-sm">{resource.content}</p>
								<a href="#" className="text-[#87A96B] hover:text-[#87A96B]/90 text-sm font-normal">
									{resource.id === 1 ? 'Read More' : resource.id === 2 ? 'Join Now' : 'Download'} →
								</a>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</div>
	</section>
);
};
export default Resources;
