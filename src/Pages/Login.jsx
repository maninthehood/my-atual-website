import React from 'react';

export default function Login() {
	return (
		<>
			<div classNameName='bg-gray-900 flex'>
				
				<div className="md:w-[690px] lg:max-w-xl md:max-h-xl m-auto  p-6 my-24 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl   dark:bg-gray-800">
					
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
						Sign in to Merrit Hospital
					</h2>
					<form className="mt-8 space-y-6" action="#" method="post">
						<div>
							<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
							<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
						</div>
						<div>

							
							<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
							<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
						</div>
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
							</div>
							<div className="ml-3 text-sm">
								<label for="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
							</div>
							<a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
						</div>
						<button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
						<div className="text-sm font-medium text-gray-900 dark:text-white">
							Not registered yet? <a className="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
						</div>
					</form>
				</div>
				</div>
				
		</>
	)
}
