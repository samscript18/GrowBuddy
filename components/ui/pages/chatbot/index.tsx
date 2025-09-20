'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, Mic, User, Bot } from 'lucide-react';
import { Textarea } from '../../textarea';

const categories = [
	{ name: 'Planting', color: 'bg-green-100 text-green-700 p-2 md:p-3 cursor-pointer' },
	{ name: 'Irrigation', color: 'bg-blue-100 text-blue-700 p-2 md:p-3 cursor-pointer' },
	{ name: 'Soil', color: 'bg-yellow-100 text-yellow-700 p-2 md:p-3 cursor-pointer' },
	{ name: 'Weather', color: 'bg-purple-100 text-purple-700 p-2 md:p-3 cursor-pointer' },
];

const useAutosizeTextarea = (value: string) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
		}
	}, [value]);

	return textareaRef;
};

const Chatbot = () => {
	const [message, setMessage] = useState<string>('');
	const textareaRef = useAutosizeTextarea(message);

	return (
		<section className="py-20 bg-[#F9FAFB]">
			<div className="px-4 sm:px-8 lg:px-16 text-center pt-12">
				<h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">AI Farming Assistant</h2>
				<p className="text-[#4B5563] text-lg mb-12">Get instant answers to your farming questions</p>

				<Card className="min-w-auto bg-white shadow-lg py-0">
					<div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
								<Bot className="w-4 h-4" />
							</div>
							<span className="font-medium">Farming Assistant</span>
						</div>
						<Badge variant="secondary" className="bg-secondary text-white font-normal">
							Online
						</Badge>
					</div>

					<div className="py-6 px-3 md:p-6 space-y-4 min-h-[300px]">
						<div className="flex gap-3">
							<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
								<User className="w-4 h-4 text-primary" />
							</div>
							<div className="bg-gray-100 rounded-lg p-3 min-w-auto max-w-[80%] md:max-w-[60%] flex max-md:flex-col gap-4">
								<p className="text-sm text-black text-start flex-1">
									Hello! I&#39;m your farming assistant. How can I help you today?
								</p>
								<span className="text-xs text-black md:mt-2.5 ml-auto flex justify-end items-end">10:30 AM</span>
							</div>
						</div>

						<div className="flex justify-end">
							<div className="bg-primary text-white rounded-lg p-3 min-w-auto max-w-[80%] md:max-w-[60%] flex max-md:flex-col gap-4">
								<p className="text-sm text-start flex-1">What&#39;s the best time to plant maize in Lagos?</p>
								<span className="text-xs text-white md:mt-2.5 ml-auto flex justify-end items-end">10:32 AM</span>
							</div>
						</div>

						<div className="flex gap-3">
							<div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
								<User className="w-4 h-4 text-primary" />
							</div>
							<div className="bg-gray-100 rounded-lg p-3 min-w-auto max-w-[80%] md:max-w-[60%] flex max-md:flex-col gap-4">
								<p className="text-sm text-black text-start flex-1">
									In Lagos, the best time to plant maize is during the rainy season, typically between April and July.
									This ensures adequate rainfall for growth.
								</p>
								<span className="text-xs text-black md:mt-2.5 ml-auto flex justify-end items-end">10:33 AM</span>
							</div>
						</div>
					</div>

					<div className="px-3 md:px-6 pb-4">
						<div className="flex flex-wrap gap-2">
							{categories.map((category) => (
								<Badge key={category.name} className={category.color}>
									{category.name}
								</Badge>
							))}
						</div>
					</div>

					<div className="p-4 border-t bg-gray-50 rounded-b-lg">
						<div className="flex gap-2">
							<Textarea
								ref={textareaRef}
								placeholder="Type your message..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="flex-1 min-h-12 focus-visible:ring-primary resize-none"
							/>
							<div className="flex gap-2 justify-end items-end">
								<Button size="lg" variant="outline" className="w-auto h-12 cursor-pointer">
									<Mic className="w-8 h-8" />
								</Button>
								<Button size="lg" className="bg-primary hover:bg-primary/90 w-auto h-12 cursor-pointer">
									<Send className="w-8 h-8" />
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</section>
	);
};

export default Chatbot;
