import Banner from '@/components/Banner'
import { getNowPlayingMovies } from '@/actions/actions'
import { APIResponse } from '@/types/APIResponse'

export default async function Page() {
	const banners: APIResponse = await getNowPlayingMovies()
	console.log(banners.results)

	return (
		<>
			<Banner banners={banners} />

			{/* rows */}
		</>
	)
}
