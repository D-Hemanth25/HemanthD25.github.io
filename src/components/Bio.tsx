import Resume from "./Resume";

const Bio = () => {
	return (
		<div className="text-white" id="home-section">
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Hi, I'm Hemanth</h1>
				</div>
				<p className="text-base sm:text-lg lg:text-xl text-gray-300">
					New Grad Software Engineer
				</p>
			</div>

			<div>
				<h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4">About</h2>
				<div className="text-gray-300 text-sm sm:text-base lg:text-sm space-y-4 leading-relaxed">
					<p>
						I recently graduated with a <span className="text-white underline">Bachelor's Degree in Computer Science and Engineering</span> and I enjoy building high-performance software solutions.{' '}
						<br />
						Currently, I’m building <span className="text-white underline">backend and full-stack web applications</span> and learning about LLM's by building AI-driven applications.
						<br />
						I’m <span className="text-white underline">actively seeking new grad opportunities</span>.
					</p>
				</div>
				<Resume />
			</div>
		</div>
	);
};

export default Bio;
