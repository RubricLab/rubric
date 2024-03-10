export function logTable(tableData: {
	title: string
	data: {
		header: string
		dataPoints: Record<string, string | number>
	}[]
}): void {
	const {title, data} = tableData

	if (!data.length) return

	// Extract all keys for columns from the first dataPoints entry assuming all entries have the same structure
	const columns = Object.keys(data[0].dataPoints)

	// Calculate width for each column based on the longest content or header name
	let columnsWidth = columns.map(column =>
		Math.max(
			column.length,
			...data.map(row => `${row.dataPoints[column]}`.length)
		)
	)

	// Construct table
	let table = `${title}\n`
	table +=
		'┌' + columnsWidth.map(width => '─'.repeat(width + 2)).join('┬') + '┐\n'
	table +=
		'│ ' +
		columns
			.map((column, index) => column.padEnd(columnsWidth[index]))
			.join(' │ ') +
		' │\n'
	table +=
		'├' + columnsWidth.map(width => '─'.repeat(width + 2)).join('┼') + '┤\n'

	data.forEach(row => {
		table +=
			'│ ' +
			columns
				.map(column =>
					`${row.dataPoints[column]}`.padEnd(columnsWidth[columns.indexOf(column)])
				)
				.join(' │ ') +
			' │\n'
	})

	table +=
		'└' + columnsWidth.map(width => '─'.repeat(width + 2)).join('┴') + '┘\n'

	// Clear the console and output the table
	console.clear()
	console.log(table)
}
