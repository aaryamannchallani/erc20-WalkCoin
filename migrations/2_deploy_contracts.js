const walkCoin = artifacts.require("walkCoin");

module.exports = function(deployer) {
  deployer.deploy(walkCoin,1000000000000000);
};
