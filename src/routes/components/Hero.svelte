<div class="bg-base-300 hero">
	<div class="hero-content text-center">
		<div class=" max-w-md">
			<div
				class="xs:text-wrap m-4 mt-10 flex justify-self-center text-xl text-nowrap md:mt-10 md:text-xl lg:text-5xl xl:text-7xl"
			>
				<h2 class="text-base-content flex justify-self-center font-bold">Welcome to!</h2>
				<h2 class="text-primary ms-3 me-3 text-center font-bold">VegardHaglund.dev</h2>
			</div>

			<p class="w-66 justify-self-center py-6 text-sm text-pretty md:text-xl">
				Hi! I’m Vegard, a backend developer with a passion for building scalable and efficient
				server-side solutions. I specialize in Node.js and Express to create robust APIs that power
				modern web applications. With proficiency in both NoSQL (MongoDB, Redis) and SQL (MySQL)
				databases, I can design flexible and performant data architectures tailored to each
				project's needs.
			</p>
			<button
				class="btn btn-primary btn-lg plausible-event-name=callToAction mt-10"
				on:click={() => {
					document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
				}}
			>
				Check out my projects
			</button>
		</div>
	</div>
</div>
