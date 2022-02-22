require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/vq8io-CBPMV4AFqEvI8hGwIHItxUKA6d",
      accounts: [
        "9446bd5835a32e92b0bf98754d117577f062ccd3e7a7036078f8abec9cb1abfd",
      ],
    },
  },
};
