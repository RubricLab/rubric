import bannerImgSystemMessage from '../const/bannerImgSystemMessage'
import openAiClient from './openAiClient'

const generateImageFromDescription = async (prompt: string) => {
	const image = await openAiClient.createImage({
		prompt: `SYSTEM: ${bannerImgSystemMessage}
            USER: ${prompt}`
	})
	return (await image.json()).data[0]
}

export default generateImageFromDescription
