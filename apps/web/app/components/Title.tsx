export default function Title({
	size,
	className
}: {
	size: 'small' | 'full'
	className?: string
}) {
	return (
		<p
			className={`font-neue-bit mt-[3px] text-4xl text-black dark:text-white ${className}`}>
			<span>Rubric</span> {size === 'full' && <span>Labs</span>}
		</p>
	)
}
