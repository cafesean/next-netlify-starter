require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
            details: { yul: false },
        },
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/iUDBNdF7zD-AzCQ0oNxW7m1vozjJIw9s",
            accounts: ["cefa5bd10fd0d69956d3c230d985593a492949fe4746747612ad56890fa43bb2"],
        },
    },
    solidity: {
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
                details: {
                    yul: false
                },
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./contracts/artifacts",
    },
    mocha: {
        timeout: 40000
    }
};
