import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schema'

// Sanity config file
const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	title: 'Blog',
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	basePath: '/studio', // URL at which Sanity studio will be hosted
	plugins: [deskTool(), visionTool()],
	schema: {types: schemas}
})

export default config
