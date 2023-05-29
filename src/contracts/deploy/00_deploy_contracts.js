const CONTRACTS = {
  MyToken: {
    name: "MyToken",
    args: {
      name: "My Token",
      symbol: "MTT",
    },
  },
  Vault: {
    name: "Vault",
    args: {
      tokenAddress: undefined,
    },
  },
  Lock: {
    name: "Lock",
    args: {
      unlockTime: undefined,
    },
  },
  MyNFT: {
    name: "MyNFT",
  },
};

const deployContract =
  (deploy, deployerAddress) => async (contractName, args) => {
    return await deploy(contractName, {
      from: deployerAddress,
      args: args,
      log: true,
    });
  };

const deployFunction = async (hre) => {
  const { ethers, deployments, network } = hre;
  const [deployer] = await ethers.getSigners();
  const deploy = deployContract(deployments.deploy, deployer.address);

  console.log(
    `Deploying contracts on ${network.name} using deployed address ${deployer.address}`
  );

  // deploy token
  const { address: myTokenAddress } = await deploy(CONTRACTS.MyToken.name, [
    CONTRACTS.MyToken.args.name,
    CONTRACTS.MyToken.args.symbol,
  ]);

  // deploy vault
  CONTRACTS.Vault.args.tokenAddress = myTokenAddress;
  const { address: vault } = await deploy(CONTRACTS.Vault.name, [
    CONTRACTS.Vault.args.tokenAddress,
  ]);

  // deploy lock
  CONTRACTS.Lock.args.unlockTime =
    Math.ceil(Date.now() / 1000) + Math.ceil(Math.random() * 100);
  const { address: lock } = await deploy(CONTRACTS.Lock.name, [
    CONTRACTS.Lock.args.unlockTime,
  ]);

  // deploy MyNFT
  const { address: myNft } = await deploy(CONTRACTS.MyNFT.name, []);

  console.log(`Deployed all contracts on following network: ${network.name}`);
};
deployFunction.tags = ["Contracts"];
module.exports = deployFunction;