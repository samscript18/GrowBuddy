'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Eye } from 'lucide-react';
import Image from 'next/image';
import {
	trainingVideo1,
	trainingVideo2,
	trainingVideo3,
	trainingVideo4,
	trainingVideo5,
	trainingVideo6,
} from '@/public/images';

const categories = ['All', 'Irrigation', 'Soil', 'Crops', 'Climate'];

const videos = [
	{
		id: 1,
		title: 'Drip Irrigation Made Easy',
		description:
			'Learn how to set up efficient drip irrigation systems to conserve water and improve crop yield.',
		duration: '12 min',
		views: '1.2k views',
		category: 'Irrigation',
		thumbnail: trainingVideo1,
	},
	{
		id: 2,
		title: 'Soil Health Assessment',
		description: 'Understand how to test your soil and interpret results for better crop planning.',
		duration: '15 min',
		views: '850 views',
		category: 'Soil',
		thumbnail: trainingVideo2,
	},
	{
		id: 3,
		title: 'Climate Adaptation Strategies',
		description: 'Prepare your farm for climate change with proven adaptation techniques.',
		duration: '18 min',
		views: '2.1k views',
		category: 'Climate',
		thumbnail: trainingVideo3,
	},
	{
		id: 4,
		title: 'Natural Pest Control',
		description: 'Eco-friendly methods to protect your crops without harmful chemicals.',
		duration: '10 min',
		views: '920 views',
		category: 'Crops',
		thumbnail: trainingVideo4,
	},
	{
		id: 5,
		title: 'Smart Crop Rotation',
		description: 'Maximize soil fertility and crop yields through strategic rotation planning.',
		duration: '14 min',
		views: '1.5k views',
		category: 'Crops',
		thumbnail: trainingVideo5,
	},
	{
		id: 6,
		title: 'Post-Harvest Storage',
		description: 'Proper storage techniques to minimize losses and maintain crop quality.',
		duration: '16 min',
		views: '780 views',
		category: 'Crops',
		thumbnail: trainingVideo6,
	},
];

export const TrainingVideo = () => {
	const [activeCategory, setActiveCategory] = useState('All');

	const filteredVideos =
		activeCategory === 'All' ? videos : videos.filter((video) => video.category === activeCategory);

	return (
		<section className="py-20 bg-white">
			<div className="px-4 sm:px-8 lg:px-16 pt-12">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Training Videos</h2>
					<p className="text-[#4B5563] text-lg">Learn modern farming techniques from experts</p>
				</div>

				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{categories.map((category) => (
						<Badge
							key={category}
							variant={activeCategory === category ? 'default' : 'secondary'}
							className={`cursor-pointer px-4 py-2 rounded-xl ${
								activeCategory === category
									? 'bg-primary hover:bg-primary/90'
									: 'bg-[#E5E7EB] hover:bg-[#E5E7EB]/90 text-[#374151]'
							}`}
							onClick={() => setActiveCategory(category)}>
							{category}
						</Badge>
					))}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredVideos.map((video) => (
						<Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow py-0">
							<div className="relative group cursor-pointer">
								<Image
									src={video.thumbnail}
									alt={video.title}
									width={394}
									height={192}
									className="object-cover rounded-t-xl"
								/>
								<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
									<div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
										<Play className="w-6 h-6 text-[#4B5563] ml-1" />
									</div>
								</div>
							</div>

							<div className="p-4 space-y-3">
								<h3 className="font-semibold text-[#111827] line-clamp-2">{video.title}</h3>
								<p className="text-sm text-[#4B5563] line-clamp-2">{video.description}</p>

								<div className="flex items-center justify-between text-xs text-[#4B5563]">
									<div className="flex items-center gap-1">
										<Clock className="w-3 h-3" />
										<span>{video.duration}</span>
									</div>
									<div className="flex items-center gap-1">
										<Eye className="w-3 h-3" />
										<span>{video.views}</span>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
