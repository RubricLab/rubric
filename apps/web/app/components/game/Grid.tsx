interface Props {
	grid: number[][]
	onClick: (i: number, j: number) => void
}

export default function Grid({grid, onClick}: Props) {
	return (
		<div>
			{grid.map((row, i) => (
				<div
					key={i}
					className='flex'>
					{row.map((cell, j) => (
						<div
							key={`${i},${j}`}
							onClick={() => onClick(i, j)}
							className={`aspect-square w-full border ${cell && 'bg-black'}`}
						/>
					))}
				</div>
			))}
		</div>
	)
}
