'use client'

import { useState, useEffect } from 'react'
import { getMoviesByGenre } from '@/actions/actions'
import { genres } from '@/constants'
import { APIResponse, Genre, Movie } from '@/types/APIResponse'
import { useParams } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'

import { Loader2, Search } from 'lucide-react'
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton'
import MovieCard from '@/components/MovieCard/MovieCard'
import { Input } from '@/components/ui/input'

export default function Page() {
	const params = useParams()
	const genreId = params.id as string

	const [movies, setMovies] = useState<Movie[]>([])
	const [page, setPage] = useState<number>(1)
	const [loading, setLoading] = useState<boolean>(false)
	const [searchVal, setSearchVal] = useState<string>('')

	const debouncedSearchVal = useDebounce(searchVal, 500)

	useEffect(() => {
		window.scrollTo(0, 0)

		const fetchMovies = async () => {
			setLoading(true)
			try {
				const data: APIResponse = await getMoviesByGenre(genreId, page)
				setMovies(data.results)
			} catch (error) {
				console.error('Error fetching movies:', error)
			}
			setLoading(false)
		}
		fetchMovies()
	}, [genreId])

	const fetchMoreMovies = async () => {
		setLoading(true)
		try {
			const nextPage = page + 1
			const data = await getMoviesByGenre(genreId, nextPage)
			setMovies((prevMovies: Movie[]) => [...prevMovies, ...data.results])
			setPage(nextPage)
		} catch (error) {
			console.error('Error fetching more movies:', error)
		}
		setLoading(false)
	}

	const handleSearchChange = (val: string) => {
		setSearchVal(val)
	}

	const filteredMovies = movies.filter((movie: Movie) =>
		movie.title.toLowerCase().includes(debouncedSearchVal.toLowerCase())
	)

	return (
		<div className='p-12 pt-24 md:pt-32 min-h-screen'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
				<h2 className='text-4xl md:text-7xl max-w-max font-semibold text-white border-b border-b-red-500'>
					{genres.find((genre: Genre) => genre.id === Number(genreId))?.name} movies
				</h2>
				<div className='relative w-full max-w-sm'>
					<Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
					<Input
						placeholder='Search for movies...'
						className='pl-8 text-white'
						onChange={(e: any) => handleSearchChange(e.target.value)}
					/>
				</div>
			</div>

			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-16'>
				{filteredMovies.length ? (
					filteredMovies.map((movie: Movie, index: number) => <MovieCard key={index} movie={movie} />)
				) : (
					<p className='text-white'>No results for '{searchVal}'...</p>
				)}
			</div>

			{filteredMovies.length >= 20 && <LoadMoreButton onClick={fetchMoreMovies} loading={loading} />}

			{loading && (
				<Loader2
					className='fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 animate-spin text-gray-300'
					size={60}
				/>
			)}
		</div>
	)
}
