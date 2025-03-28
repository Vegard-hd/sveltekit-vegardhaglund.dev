<script>
	let { stats } = $props();
	function formatSeconds(seconds = 10000) {
		let remaindingMinutes = 0;
		let hour = 0;
		let remainder = seconds % 60;
		const minutes = Math.floor(seconds / 60);
		if (minutes >= 60) {
			remaindingMinutes = minutes % 60;
			hour = Math.floor(minutes / 60);
		} else {
			remaindingMinutes = minutes;
		}
		if (remainder < 10) {
			remainder = `0${remainder}`;
		}
		return `${hour}h ${minutes}m ${remainder}s`;
	}
</script>

<section>
	<h2 class="text-primary mt-25 mb-5 flex justify-self-center text-4xl font-bold sm:mb-1">
		Site analytics
		<svg
			class="ps-2 pb-2"
			xmlns="http://www.w3.org/2000/svg"
			height="48px"
			viewBox="0 -960 960 960"
			width="48px"
			fill="currentColor"
			><path
				d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"
			/></svg
		>
	</h2>
	<h5 class="text-secondary mt-5 flex justify-self-center text-center">
		All time
		<svg
			class="ps-2 pb-2"
			xmlns="http://www.w3.org/2000/svg"
			height="36px"
			viewBox="0 -960 960 960"
			width="36px"
			fill="currentColor"
			><path
				d="M109.91-240Q81-240 60.5-260.59 40-281.18 40-310.09t20.49-49.41q20.5-20.5 49.28-20.5 5.23 0 10.23.5t13 2.5l200-200q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q371.18-670 400.09-670t49.41 20.63q20.5 20.64 20.5 49.61 0 1.76-3 22.76l110 110q8-2 13-2.5t10-.5q5 0 10 .5t13 2.5l160-160q-2-8-2.5-13t-.5-10.23q0-28.78 20.59-49.28Q821.18-720 850.09-720t49.41 20.59q20.5 20.59 20.5 49.5t-20.49 49.41q-20.5 20.5-49.28 20.5-5.23 0-10.23-.5t-13-2.5L667-423q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q628.82-330 599.91-330t-49.41-20.49q-20.5-20.5-20.5-49.28 0-5.23.5-10.23t2.5-13L423-533q-8 2-13 2.5t-10.25.5q-1.75 0-22.75-3L177-333q2 8 2.5 13t.5 10.23q0 28.78-20.59 49.28Q138.82-240 109.91-240Z"
			/></svg
		>
	</h5>

	<div
		class="text-base-400 text-secondary mb-5 flex justify-self-center text-3xl font-semibold sm:mb-1"
	>
		<div class="grid w-full max-w-4xl grid-cols-2 gap-0 text-center shadow-xl lg:grid-cols-4">
			<div class="bg-base-300 stat w-50 shadow-sm">
				<div class="stat-title">Unique Visitors</div>
				<div class="stat-value">{stats.allTime?.visitors}</div>
			</div>
			<div class="bg-base-300 stat w-50 shadow-sm">
				<div class="stat-title">Total Visits</div>
				<div class="stat-value">{stats.allTime.visits}</div>
			</div>
			<div class="bg-base-300 stat w-50 shadow-sm">
				<div class="stat-title">Total Pageviews</div>
				<div class="stat-value">{stats.allTime.pageviews}</div>
			</div>
			<div class="bg-base-300 stat w-50 shadow-sm">
				<div class="stat-title inline-flex justify-self-center">
					Visit Duration <svg
						class="ps-1 pb-1"
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="currentColor"
						><path
							d="M188.33-473.33H320q9 0 17.33 4.5 8.34 4.5 12.67 13.5l50 100.66 130-260.66q9-19 30-19t30 19l71 142h110.67Q759.33-584 676.67-659 594-734 480-734q-114 0-196.67 75-82.66 75-95 185.67Zm291.67 326q114 0 196.33-74.67 82.34-74.67 94.67-184.67H640q-9 0-17.33-4.5-8.34-4.5-12.67-13.5l-50-100.66-130 260.66q-9 19-30 19t-30-19l-71-142H189q12.33 110 94.67 184.67Q366-147.33 480-147.33Zm0 66.66q-74 0-139.5-28.5T226-186.67q-49-49-77.5-114.5T120-440.67h66.67q0 122 85.66 207.67Q358-147.33 480-147.33q122 0 207.67-85.67 85.66-85.67 85.66-207.67H840q0 74-28.5 139.5T734-186.67q-49 49-114.5 77.5T480-80.67Zm-360-360q0-74 28.5-139.5t77.5-114.5q49-49 114.5-77.5t139.5-28.5q65.33 0 123.67 21.67 58.33 21.67 105.66 61L762-770.67 808.67-724 756-671.33Q792.67-628 816.33-571 840-514 840-440.67h-66.67q0-122-85.66-207.66Q602-734 480-734q-122 0-207.67 85.67-85.66 85.66-85.66 207.66H120Zm240-412.66V-920h240v66.67H360Zm120 706q-122 0-207.67-85.67-85.66-85.67-85.66-207.67 0-122 85.66-207.66Q358-734 480-734q122 0 207.67 85.67 85.66 85.66 85.66 207.66T687.67-233Q602-147.33 480-147.33ZM480-440Z"
						/></svg
					>
				</div>
				<div class="stat-value">{formatSeconds(stats.allTime.visitDuration)}</div>
			</div>
		</div>
	</div>
	<h5 class="text-secondary mt-5 flex justify-self-center">
		Last 7 days
		<svg
			class="ps-2 pb-2"
			xmlns="http://www.w3.org/2000/svg"
			height="32px"
			viewBox="0 -960 960 960"
			width="32px"
			fill="currentColor"
			><path
				d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM516-226.67h115.33v-506.66H516v506.66Zm-186.67 0h115.34v-506.66H329.33v506.66Zm-182.66 0h116v-506.66h-116v506.66Zm551.33 0h115.33v-506.66H698v506.66Z"
			/></svg
		>
	</h5>
	<div
		class="text-base-400 text-secondary mb-5 flex justify-self-center text-3xl font-semibold sm:mb-1"
	>
		<div class="grid w-full max-w-4xl grid-cols-2 gap-0 text-center shadow-xl lg:grid-cols-4">
			<div class="bg-base-300 text-secondary stat w-50 shadow-sm">
				<div class="stat-title">Unique Visitors</div>
				<div class="stat-value">{stats.lastWeek.visitors}</div>
			</div>
			<div class="bg-base-300 text-secondary stat w-50 shadow-sm">
				<div class="stat-title">Total Visits</div>
				<div class="stat-value">{stats.lastWeek.visits}</div>
			</div>
			<div class="bg-base-300 text-secondary stat w-50 shadow-sm">
				<div class="stat-title">Total Pageviews</div>
				<div class="stat-value">{stats.lastWeek.pageviews}</div>
			</div>
			<div class="bg-base-300 text-secondary stat w-50 shadow-sm">
				<div class="stat-title inline-flex justify-self-center">
					Visit Duration <svg
						class="ps-1 pb-1"
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="currentColor"
						><path
							d="M188.33-473.33H320q9 0 17.33 4.5 8.34 4.5 12.67 13.5l50 100.66 130-260.66q9-19 30-19t30 19l71 142h110.67Q759.33-584 676.67-659 594-734 480-734q-114 0-196.67 75-82.66 75-95 185.67Zm291.67 326q114 0 196.33-74.67 82.34-74.67 94.67-184.67H640q-9 0-17.33-4.5-8.34-4.5-12.67-13.5l-50-100.66-130 260.66q-9 19-30 19t-30-19l-71-142H189q12.33 110 94.67 184.67Q366-147.33 480-147.33Zm0 66.66q-74 0-139.5-28.5T226-186.67q-49-49-77.5-114.5T120-440.67h66.67q0 122 85.66 207.67Q358-147.33 480-147.33q122 0 207.67-85.67 85.66-85.67 85.66-207.67H840q0 74-28.5 139.5T734-186.67q-49 49-114.5 77.5T480-80.67Zm-360-360q0-74 28.5-139.5t77.5-114.5q49-49 114.5-77.5t139.5-28.5q65.33 0 123.67 21.67 58.33 21.67 105.66 61L762-770.67 808.67-724 756-671.33Q792.67-628 816.33-571 840-514 840-440.67h-66.67q0-122-85.66-207.66Q602-734 480-734q-122 0-207.67 85.67-85.66 85.66-85.66 207.66H120Zm240-412.66V-920h240v66.67H360Zm120 706q-122 0-207.67-85.67-85.66-85.67-85.66-207.67 0-122 85.66-207.66Q358-734 480-734q122 0 207.67 85.67 85.66 85.66 85.66 207.66T687.67-233Q602-147.33 480-147.33ZM480-440Z"
						/></svg
					>
				</div>
				<div class="stat-value">{formatSeconds(stats.lastWeek.visitDuration)}</div>
			</div>
		</div>
	</div>
	<h4 class="text-info mb-5 text-center text-balance">
		<em
			>Analytics powered by
			<a class="link" href="https://plausible.io">Plausible.io</a></em
		>
	</h4>
</section>
