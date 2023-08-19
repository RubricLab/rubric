// Author of a blog post
const author = {
	name: 'author',
	title: 'Author',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string'
				}
			]
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [{title: 'Normal', value: 'normal'}],
					lists: []
				}
			]
		}
	],
	preview: {
		select: {
			title: 'name',
			media: 'image'
		}
	}
}

export default author
