const CertificateCOntroller = artifacts.require("./CertificateController/CertificateController.sol")
const ERC1400ERC20 = artifacts.require('./ERC1400.sol');
const ERC777 = artifacts.require('./token/ERC777/ERC777.sol')
const ERC820Client = artifacts.require('./token/ERC777/ERC820Client.sol')
module.exports = async function (deployer) {
  //deployer.deploy(Migrations);
  // deployer.deploy(CertificateCOntroller, "0xa2c5de2286900d53f0f772e63defb536ef53b678");
    /* controller = '0xA2C5de2286900d53F0f772e63deFB536Ef53b678';
    const partition1 = '0x5265736572766564000000000000000000000000000000000000000000000000'; // Reserved in hex
    const partition2 = '0x4973737565640000000000000000000000000000000000000000000000000000'; // Issued in hex
    const partition3 = '0x4c6f636b65640000000000000000000000000000000000000000000000000000'; // Locked in hex
    const partitions = [partition1, partition2, partition3];
    //deployer.deploy(ERC820Client)
    deployer.deploy(ERC777,"aza","aeaze",1,[controller],"0xA2C5de2286900d53F0f772e63deFB536Ef53b678")
    // deployer.deploy(ERC1400ERC20, "ERC1400", "DAUB", 1, [controller], '0x20c242C76fa5a1362B7D118Dd3066a5eb9Bb1C78', partitions);
*/};
/**
 * var ERC1400ERC20 = artifacts.require('./ERC1400.sol');

const CERTIFICATE_SIGNER = '0xe31C41f0f70C5ff39f73B4B94bcCD767b3071630';
const controller = "0xb5747835141b46f7C472393B31F8F5A57F74A44f";

const partition1 = '0x5265736572766564000000000000000000000000000000000000000000000000'; // Reserved in hex
const partition2 = '0x4973737565640000000000000000000000000000000000000000000000000000'; // Issued in hex
const partition3 = '0x4c6f636b65640000000000000000000000000000000000000000000000000000'; // Locked in hex
const partitions = [partition1, partition2, partition3];


module.exports = function (deployer, network, accounts) {

  deployer.deploy(ERC1400ERC20, 'ERC1400Token', 'DAU', 1, [controller], CERTIFICATE_SIGNER, partitions);
};
 */