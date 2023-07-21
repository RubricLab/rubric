import crypto from 'crypto';

export default (timestamp: number, body: string, signature: string) => {

    if (Math.abs(Math.floor(new Date().getTime() / 1000) - timestamp) > 300) {
        return false
    }
    const base = `v0:${timestamp}:${body}`

    const expectedSignature = `v0=${crypto
        .createHmac('sha256', process.env.SLACK_SIGNING_SECRET)
        .update(base, 'utf8')
        .digest('hex')}`;
    
    if (expectedSignature !== signature) {
        return false
    }

    return true
}