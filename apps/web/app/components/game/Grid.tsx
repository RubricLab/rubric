interface Props {
	grid: number[][]
}

export default function Grid({grid}: Props) {
	return (
		<div>
			{grid.map((row, i) => (
				<div
					key={i}
					className='flex'>
					{row.map((cell, j) => (
						<div
							key={`${i},${j}`}
							className={`aspect-square w-full border ${cell && 'bg-black'}`}
						/>
					))}
				</div>
			))}
		</div>
	)
}
