'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Check, Droplets, Thermometer } from 'lucide-react';

export const PlantingGuide = () => {
	const [selectedCrop, setSelectedCrop] = useState<string>('');
	const [selectedSoil, setSelectedSoil] = useState<string>('');
	const [showResult, setShowResult] = useState<boolean>(false);

	const handleSubmit = () => {
		if (selectedCrop && selectedSoil) {
			setShowResult(true);
		}
	};

	return (
		<section className="py-16 bg-white">
			<div className="px-4 sm:px-8 lg:px-16 text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Personalized Planting Guide</h2>
				<p className="text-[#4B5563] text-lg mb-12">
					Select your crop and soil type to get customized farming recommendations
				</p>

				<Card className="p-4 md:p-8 w-full md:min-w-[65%] mx-auto border-none shadow-sm">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
						<div className="cols-span-1 space-y-2">
							<label className="text-sm font-medium text-[#4B5563] block text-left">Select Crop</label>
							<Select value={selectedCrop} onValueChange={setSelectedCrop}>
								<SelectTrigger className="w-full p-5 cursor-pointer focus-visible:ring-primary">
									<SelectValue className="text-black p-4 cursor-pointer" placeholder="Choose a crop..." />
								</SelectTrigger>
								<SelectContent>
									<SelectItem className="text-black p-4 cursor-pointer" value="maize">
										Maize
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="rice">
										Rice
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="yam">
										Yam
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="cassava">
										Cassava
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="tomato">
										Tomato
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="cols-span-1 space-y-2">
							<label className="text-sm font-medium text-[#4B5563] block text-left">Select Soil Type</label>
							<Select value={selectedSoil} onValueChange={setSelectedSoil}>
								<SelectTrigger className="w-full p-5 cursor-pointer focus-visible:ring-primary">
									<SelectValue className="text-black p-4 cursor-pointer" placeholder="Choose soil type..." />
								</SelectTrigger>
								<SelectContent>
									<SelectItem className="text-black p-4 cursor-pointer" value="loamy">
										Loamy Soil
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="clay">
										Clay Soil
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="sandy">
										Sandy Soil
									</SelectItem>
									<SelectItem className="text-black p-4 cursor-pointer" value="silt">
										Silt Soil
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{showResult && (
						<Card className="bg-[#F0FDF4] border-[#BBF7D0] p-3 md:p-6 mb-6">
							<div className="flex max-md:flex-col items-center md:items-start gap-3">
								<Check className="w-8 h-8 bg-[#DCFCE7] p-2 rounded-full text-[#166534] flex-shrink-0 mt-0.5" />
								<div className="space-y-3 text-center md:text-left">
									<h3 className="font-semibold text-[#166534]">Excellent Match!</h3>
									<p className="text-[#15803D]">
										Maize grows exceptionally well in loamy soil. Plant between March-May for optimal yield. Expected
										harvest: July-September.
									</p>
									<div className="space-y-2 max-md:mt-2 max-md:flex max-md:flex-col max-md:items-center">
										<div className="flex items-center gap-2 text-sm text-[#16A34A]">
											<Droplets className="w-4 h-4 text-[#166534]" />
											<span>Irrigation: 2-3 times weekly</span>
										</div>
										<div className="flex items-center gap-2 text-sm text-[#16A34A]">
											<Thermometer className="w-4 h-4 text-[#166534]" />
											<span>Optimal temp: 20-30°C</span>
										</div>
									</div>
								</div>
							</div>
						</Card>
					)}

					<div className="w-full md:w-[40%] space-y-4 mx-auto">
						<Button
							onClick={handleSubmit}
							className="w-full bg-primary hover:bg-primary/90 py-6 cursor-pointer"
							disabled={!selectedCrop || !selectedSoil}>
							Get Recommendations
						</Button>

						{/* <Button variant="outline" className="w-full bg-transparent">
							<Map className="w-4 h-4 mr-2" />
							View Regional Map
						</Button> */}
					</div>
				</Card>
			</div>
		</section>
	);
};
