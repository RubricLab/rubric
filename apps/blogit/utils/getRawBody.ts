import type { Readable } from 'node:stream';

// Get raw body as string
export default async (readable: Readable): Promise<Buffer>  => {
    const chunks = [];
    for await (const chunk of readable) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
  }