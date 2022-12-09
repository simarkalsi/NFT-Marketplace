require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path: './.env.local' })


/** @type import('hardhat/config').HardhatUserConfig */
const privateKey=process.env.REACT_APP_PRIVATE_KEY
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{},
    polygon:{
      url: process.env.REACT_APP_RPC_URL,
      accounts:[privateKey]

    }
  }
};
