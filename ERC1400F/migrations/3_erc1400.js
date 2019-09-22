var ERC1400ERC20 = artifacts.require('./ERC1400.sol');
//address certficate signer contract
const CERTIFICATE_SIGNER = '0x7c666dd9524a86900495ac1ef7ede7a469e324b4';
//account address
const controller = "0x594059544dec36b56088cd29d614f196f7400bc7";

const partition1 = '0x5265736572766564000000000000000000000000000000000000000000000000'; // Reserved in hex
const partition2 = '0x4973737565640000000000000000000000000000000000000000000000000000'; // Issued in hex
const partition3 = '0x4c6f636b65640000000000000000000000000000000000000000000000000000'; // Locked in hex
const partitions = [partition1, partition2, partition3];

module.exports = function (deployer, network, accounts) {
  deployer.deploy(ERC1400ERC20, 'ERC1400Token', 'DAU', 1, [controller], CERTIFICATE_SIGNER, partitions);
};