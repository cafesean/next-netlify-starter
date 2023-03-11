import type { NextApiRequest, NextApiResponse } from 'next';

export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json({ hello: 'world' });
}