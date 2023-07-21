import bannerImgSystemMessage from '../const/bannerImgSystemMessage'
import openAiClient from './openAiClient'

export default async (prompt: string) => {
    const image = await openAiClient.createImage({
        prompt:
            `SYSTEM: ${bannerImgSystemMessage}
            USER: ${prompt}`,
    })
    return (await image.json()).data[0]
}