import React from 'react';
import '../App.css';
import Cta from './Cta'
import Form from './Form'

export default function Home() {
	return (
		<>
			<section class="bg-cover bg-fixed   bg-center bg-no-repeat bg-[url('blob:https://dreamstudio.ai/7e15d2e4-0eae-484d-991a-be04f43df55d')] bg-gray-700 text-sky-500 bg-blend-hard-light dark:bg-blend-multiply ">
				<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 ">
					<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl dark:text-white">I invest in Building Beautiful Websites</h1>
					<p class="mb-8 text-lg  font-normal lg:text-xl sm:px-16 lg:px-48 dark:text-white">Here at Merrit Hospital we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
					<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
							Volunteer
							<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
						<a href="#" class="animate-bounce inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 dark:text-white">
							Book A call
						</a>
					</div>
				</div>
			</section>


			<section class="bg-white dark:bg-gray-900">
				<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
					<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Instrested in leaning more about me and my work??</h1>
					<p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Check out my favorite website for web related content</p>
					<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
						<a href="#	" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
							Check out our sponsors
							<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
				</div>
			</section>

			<section class="bg-gray-50 dark:bg-gray-900">
				<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
					<div class="flex flex-col justify-center">
						<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
						<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Merrit Hospital we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
						<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our app
							<svg aria-hidden="true" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</a>

					</div>
					<Form />

				</div>

			</section>
			<Cta />
		</>
	)
}

