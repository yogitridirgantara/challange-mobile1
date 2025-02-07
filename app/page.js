import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-gray-50 text-gray-900">
			<Head>
				<title>CV Online - Next.js</title>
				<meta
					name="description"
					content="CV Online menggunakan Next.js"
				/>
			</Head>

			{/* Hero Section */}
			<section className="bg-gray-900 text-white text-center py-10">
				<Image
					src="/IMG_7441.jpg"
					alt="Profile Picture"
					width={150}
					height={150}
					className="rounded-full mx-auto border-1 border-white shadow-lg"
				/>
				<h1 className="text-3xl font-extrabold mt-4">
					Yogi Tri Dirgantara
				</h1>
				<p className="text-lg mt-2 opacity-80">
					Junior Graphic Designer & UI/UX Designer
				</p>
			</section>

			{/* About Section */}
			<section className="max-w-4xl mx-auto p-10">
				<h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 inline-block">
					About Me
				</h2>
				<p className="text-lg text-gray-700 leading-relaxed">
					Saya adalah seorang pengembang web dengan pengalaman
					dalam Next.js, React, dan teknologi lainnya. Saya juga
					seorang design graphics dan UI/UX Design.
				</p>
			</section>

			{/* Skills Section */}
			<section className="bg-gray-800 text-white p-10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-4 border-b-4 border-white inline-block">
						Skills
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
						<div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
							💻{" "}
							<span className="font-semibold">
								Programming Web
							</span>
						</div>
						<div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
							🎨{" "}
							<span className="font-semibold">
								UI/UX Design
							</span>
						</div>
						<div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
							🖼️{" "}
							<span className="font-semibold">
								Graphic Design
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="max-w-4xl mx-auto p-10">
				<h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 inline-block">
					Services
				</h2>
				<ul className="space-y-2">
					<li className="bg-gray-100 p-4 rounded-lg shadow-md">
						🔹 Web Development
					</li>
					<li className="bg-gray-100 p-4 rounded-lg shadow-md">
						🔹 UI/UX Design
					</li>
					<li className="bg-gray-100 p-4 rounded-lg shadow-md">
						🔹 Design Graphics
					</li>
				</ul>
			</section>

			{/* Portfolio Section */}
			<section className="bg-gray-100 p-10">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 inline-block">
						Portfolio
					</h2>
					<p className="text-lg text-gray-700 leading-relaxed">
						Beberapa proyek yang telah saya buat.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
						<div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
							<h3 className="font-semibold">Project 1</h3>
							<p className="text-sm text-gray-600">
								Deskripsi singkat proyek.
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
							<h3 className="font-semibold">Project 2</h3>
							<p className="text-sm text-gray-600">
								Deskripsi singkat proyek.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="max-w-4xl mx-auto p-10 text-center">
				<h2 className="text-3xl font-bold mb-4 border-b-4 border-gray-800 inline-block">
					Contact
				</h2>
				<p className="text-lg text-gray-700 leading-relaxed mt-4">
					Email:{" "}
					<a
						href="mailto:yogitridirgantaraa@gmail.com"
						className="text-blue-600 font-semibold hover:underline"
					>
						yogitridirgantaraa@gmail.com
					</a>
				</p>
			</section>
		</div>
	);
}
