'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { farmerImg } from '@/public/images';
import Image from 'next/image';

const testimonials = [
	{
		id: 1,
		name: 'Adamu Ibrahim',
		location: 'Kaduna State',
		image: farmerImg,
		rating: 5,
		text:
			'I used the planting guide and increased my maize yield by 40%. The soil recommendations were spot on, and the weather alerts helped me plan irrigation perfectly.',
	},
	{
		id: 2,
		name: 'Fatima Yusuf',
		location: 'Kano State',
		image: farmerImg,
		rating: 5,
		text:
			"The AI assistant helped me identify pest problems early and suggested organic solutions. My tomato harvest was the best I've had in years.",
	},
	{
		id: 3,
		name: 'Chidi Okafor',
		location: 'Enugu State',
		image: farmerImg,
		rating: 5,
		text:
			'The training videos taught me modern irrigation techniques that reduced my water usage by 30% while improving crop quality.',
	},
];

export const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<section className="py-16 bg-[#F0FDF4]">
			<div className="px-4 sm:px-8 lg:px-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What Farmers Say</h2>
				<p className="text-[#4B5563] text-lg mb-12">Success stories from our farming community</p>

				<Card className="p-8 bg-white w-full min-h-auto md:max-w-2xl mx-auto">
					<div className="space-y-6">
						<Image
							src={testimonials[currentIndex].image}
							alt={testimonials[currentIndex].name}
							width={80}
							height={80}
							className="w-20 h-20 rounded-full mx-auto object-cover"
						/>

						<div className="flex justify-center gap-1">
							{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
								<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
							))}
						</div>

						<blockquote className="text-gray-700 text-lg leading-relaxed min-h-[100px]">
							{`"${testimonials[currentIndex].text}"`}
						</blockquote>

						<div className="text-center">
							<div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
							<div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
						</div>
					</div>
				</Card>

				<div className="flex justify-center gap-2 mt-8">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-colors ${
								index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
