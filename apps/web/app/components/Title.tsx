export default function Title({size}: {size: 'small' | 'full'}) {
	return (
		<p className='text-2xl font-semibold'>
			<span>
				R<span className='font-neue-bit text-4xl font-bold'>u</span>b
				<span className='font-neue-bit text-4xl'>r</span>ic
			</span>{' '}
			{size === 'full' && <span>Labs</span>}
		</p>
	)
}
