const contract = "Lock";
const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'hardhat';

export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {

	const a = attachContract(address, contract);
	res.status(200).json({ abi: a });
}

async function attachContract(address: string, contract: string) {
	const contractFactory = await ethers.getContractFactory(contract);
	const abi = contractFactory.interface;
  return abi;
}
