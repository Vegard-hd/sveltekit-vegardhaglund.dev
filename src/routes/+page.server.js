/** @type {import('./$types').PageLoad} */
import { LRUCache } from 'lru-cache';
import dotenv from 'dotenv';
dotenv.config();
const options = {
	max: 1,

	// for use with tracking overall storage size

	// how long to live in ms
	ttl: 1000 * 60 * 15,

	// return stale items before removing from cache?
	allowStale: false,

	updateAgeOnGet: false,
	updateAgeOnHas: false
};

const cache = new LRUCache(options);
import axios from 'axios';
const requestData = {
	site_id: 'vegardhaglund.dev',
	metrics: ['visitors', 'visits', 'pageviews', 'visit_duration'],
	date_range: 'all'
	// filters: [["is_not", "visit:country_name", [""]]],
	// dimensions: ["visit:country_name", "visit:city_name"],
};

const requestData7days = {
	site_id: 'vegardhaglund.dev',
	metrics: ['visitors', 'visits', 'pageviews', 'visit_duration'],
	date_range: '7d'
	// filters: [["is_not", "visit:country_name", [""]]],
	// dimensions: ["visit:country_name", "visit:city_name"],
};

const key = process.env.PLAUSIBLE_KEY;

async function getStats() {
	const getApiData = async (queryOptions) => {
		const { data } = await axios.post(
			'https://required.vegardhaglund.dev/api/v2/query',
			queryOptions,
			{
				headers: {
					setContentType: 'application/json',
					Authorization: 'Bearer ' + key
				}
			}
		);
		return await data;
	};

	const [data, data2] = await Promise.all([
		await getApiData(requestData),
		await getApiData(requestData7days)
	]);

	return {
		allTime: {
			// @ts-ignore
			visitors: data?.results[0]?.metrics[0] ?? 0,
			// @ts-ignore

			visits: data?.results[0]?.metrics[1] ?? 0,

			// @ts-ignore
			pageviews: data?.results[0]?.metrics[2] ?? 0,

			// @ts-ignore
			visitDuration: data?.results[0]?.metrics[3] ?? 0
		},
		lastWeek: {
			// @ts-ignore
			visitors: data2?.results[0]?.metrics[0] ?? 0,
			// @ts-ignore

			visits: data2?.results[0]?.metrics[1] ?? 0,

			// @ts-ignore
			pageviews: data2?.results[0]?.metrics[2] ?? 0,

			// @ts-ignore
			visitDuration: data2?.results[0]?.metrics[3] ?? 0
		}
	};
}

export const load = async () => {
	let apiData = cache.get('latest');
	if (!apiData) {
		apiData = await getStats();
		cache.set('latest', apiData);
	}
	return apiData;
};
