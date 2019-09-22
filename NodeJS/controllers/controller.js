const express = require('express');
const Web3 = require('web3');
const fs = require('fs')

const router = express.Router();
var source = fs.readFileSync("/home/moez/Desktop/ProjetPFE/Dapps/ERC1400F/build/contracts/ERC1400.json");
var parseSource = JSON.parse(source)
var contractAddress = "0xBab79244a832940E108d310C6dF1C3027B74187d";
var contractABI = parseSource.abi;
var gaS = 1000000;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
}
else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var contractInstance = new web3.eth.Contract(contractABI, contractAddress);//.at(contractAddress);



/* router.get('/deploy',async(req,res) =>{

    
myContract.deploy({
    arguments: [name, symbol, granularity ,controller, certificateSigner, partitions]
})
.send({
    from: '',
    gas: 1500000,
    gasPrice: '30000000000000'
})
.then((newContractInstance) => {
    console.log(newContractInstance.options.address) // instance with the new contract address
}); */

/*var ERC1400ERC20 = artifacts.require('/home/moez/Desktop/ProjetPFE/Dapps/ERC1400F/contracts/ERC1400.sol');
//address certficate signer contract
const CERTIFICATE_SIGNER = '0x5dafecfa7eae1f82e43a6d9c64d57f9b10d18352';
//account address
const controller = "0x594059544dec36b56088cd29d614f196f7400bc7";

const partition1 = '0x5265736572766564000000000000000000000000000000000000000000000000'; // Reserved in hex
const partition2 = '0x4973737565640000000000000000000000000000000000000000000000000000'; // Issued in hex
const partition3 = '0x4c6f636b65640000000000000000000000000000000000000000000000000000'; // Locked in hex
const partitions = [partition1, partition2, partition3];

module.exports = function (deployer, network, accounts) {
  deployer.deploy(ERC1400ERC20, 'ERC1400Token', 'DAU', 1, [controller], CERTIFICATE_SIGNER, partitions);
};

})*/
/* 
router.get('/add',async(req,res) => {
    try {
             await contractInstance.methods.ERC1400ERC20(req.body.name,req.body.symbol,req.body.granularity,req.body.controllers,req.body.certificateSigner,req.body.partitions).send({from: req.params.address, gas : gaS}).then(result =>{
            res.send(result)
            console.log("token = " + result);
        })
        
    } catch (e) {
        res.send("error ADD")
        console.log("Add " + e);
        
    }
    
})

router.post('/token',async(req,res) =>{
    console.log("token...");
    console.log(req.body.nom) ; 
})

router.get('/name',async(req,res) =>{
    console.log("name...");
    try{
        await contractInstance.methods.name().call().then(result =>{
          res.send(result)
          console.log("name data = " + result);
        })
      }catch(e){
        res.send("error")
      }
    //let data = await contractInstance.methods.name().call();
    //res.send(data);
    //console.log("name data = " +  contractInstance.methods.name().call());
     
})*/
router.get('/symbole',async (req, res) => {    
    try{
        let data = await contractInstance.methods.symbol().call()
        res.send(data)
    }catch(e){
        console.log("symbole "+e)
        res.send("error symbole")
      }

})
router.get('/owner',async(req, res) => {
    try{
        let data = await contractInstance.methods.owner().call()
        res.send(data)
    }catch(e){
        console.log("owner "+e)
        res.send("error owner")
      }
})
router.get('/controllers',async(req,res) => {
    try{
        let data = await contractInstance.methods.controllers().call()
        res.send(data)
    }catch(e){
        console.log("owner "+e)
        res.send("error owner")
    }
})
router.get('/getTokenDefaultPartitions',async(req,res) => {
try{    
    let data = await contractInstance.methods.getTokenDefaultPartitions().call()
    res.send(data)
    }catch(e){
        console.log("getTokenDefaultPartitions "+e)
        res.send("error getTokenDefaultPartitions")
    }
})
router.get('/granularity',async(req,res) => {
    try{
        let data = await contractInstance.methods.granularity().call()
        res.send(data)
    }catch(e){
        console.log("granularity "+e)
        res.send("error granularity")
    }
    
})
router.get('/isContrallable',async(req,res) => {
    try{
        let data = await contractInstance.methods.isContrallable().call()
        res.send(data)
    }catch(e){
        console.log("isContrallable "+e)
        res.send("error isContrallable")
    }
    
})

router.get('/isIssuable',async(req,res) => {
    try{
        let data = await contractInstance.methods.isIssuable().call()
        res.send(data)
    }catch(e){
        console.log("isIssuable "+e)
        res.send("error isIssuable")
    }
    
})
/*
router.get('/isOwner',async(req,res) => {
   try{
    let data = await contractInstance.methods.isOwner().call()
    res.send(data)
   }
   catch(e){
    console.log("isOwner "+e)
    res.send("error isOwner")
}
})

router.get('/totalPartitions',async(req,res) => {
    try{
        let data = await contractInstance.methods.totalPartitions().call()
        res.send(data)
    }
    catch(e){
        console.log("totalPartitions "+e)
        res.send("error totalPartitions")
    }
})
router.get('/totalSupply',async(req,res) => {
    try{
        let data = await contractInstance.methods.totalSupply().call()
        res.send(data)
    }
    catch(e){
        console.log("totalSupply "+e)
        res.send("error totalSupply")
    }
})
router.get('/balanceOf/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOf(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("balanceOf "+e)
        res.send("error balanceOf")
    }
})
router.get('/balanceOfByPartition/:partition/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOfBy(req.params.partition,req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("balanceOfByPartition "+e)
        res.send("error balanceOfByPartition")
    }
})*/
router.get('/canOperatorTransferByPartition/:partition/:From/:To/:value/:data/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.balanceOfByPartition(req.params.partition,req.params.From,req.params.To,req.params.value,req.params.data,req.params.operator).call()
        res.send(data)
    }catch(e){
        console.log("canOperatorTransferByPartition "+e)
        res.send("error canOperatorTransferByPartition")
    }
})
router.get('/canTransferBypartition/:partition/:to/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.canTransferBypartition(req.params.partition,req.params.to,req.params.value,req.params.data).call()
        res.send(data)
    }catch(e){
        console.log("canTransferBypartition "+e)
        res.send("error canTransferBypartition")
    }
})
/*
router.get('/certificateSigner/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.certificateSigner(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("certificateSigner "+e)
        res.send("error certificateSigner")
    }
})
/*
router.get('/checkCount/:address',async(req,res) => {
    try{
        let data = await contractInstance.methods.checkCount(req.params.address).call()
        res.send(data)
    }catch(e){
        console.log("checkCount "+e)
        res.send("error checkCount")
    }
})
router.get('/controllersBypartition/:partition',async(req,res) => {
    try{
        let data = await contractInstance.methods.controllersBypartition(req.params.partition).call()
        res.send(data)
    }catch(e){
        console.log("checkCount "+e)
        res.send("error checkCount")
    }
})
router.get('/getDefaultpartitions/:TokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.getDefaultpartitions(req.params.TokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("getDefaultpartitions "+e)
        res.send("error getDefaultpartitions")
    }
})
*/
router.get('/getDocument/:name',async(req,res) => {
    try{
        let data = await contractInstance.methods.getDocument(req.body.name).call()
        res.send(data)
    }catch(e){
        console.log("getDocument "+e)
        res.send("error getDocument")
    }
})
/*
router.get('/isMinter/:account',async(req,res) => {
    try{
        let data = await contractInstance.methods.isMinter(req.params.account).call()
        res.send(data)
    }catch(e){
        console.log("isMinter "+e)
        res.send("error isMinter")
    }
})
router.get('/isOperatorFor/:operator/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.isOperatorFor(req.params.operator,req.params.tokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("isOperatorFor "+e)
        res.send("error isOperatorFor")
    }
})
router.get('/isOperatorForPartition/:partition/:operator/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.isOperatorForPartition(req.params.partition,req.params.operator,req.params.tokenHolder).call()
    res.send(data)
    }catch(e){
        console.log("isOperatorForPartition "+e)
    }
        res.send("error isOperatorForPartition")
    
})
router.get('/partitionsOf/:tokenHolder',async(req,res) => {
    try{
        let data = await contractInstance.methods.partitionOf(req.params.tokenHolder).call()
        res.send(data)
    }catch(e){
        console.log("partitionsOf "+e)
        res.send("error partitionsOf")
      }
})




console.log("mezmezmeem");


router.get('/addMinter/:account/:address',async(req,res) => {
        try{
            let adresse = await contractInstance.methods.owner().call()
                try{
                    console.log("addMinter "+adresse)
                    console.log("gaS "+gaS)
                    console.log("req.params.address "+req.params.address)
                    console.log(contractInstance.methods.addMinter(req.params.account).send({from : req.params.address , gas:gaS}));
                    let data = await contractInstance.methods.addMinter(req.params.account).send({from : req.params.address , gas:gaS})
                    res.send("adresse = "+ adresse + "data =" + data)
                    console.log("gaS 2 "+gaS)
                }catch(e){
                    console.log("addMinter        :  "+e)
                    res.send(e)
                }

        }catch(e){
            console.log("owner "+e)
            res.send("error owner")
        }

})

router.get('/authorizeOperator/:operator',async(req,res) => {
    try{req.params.address
        let data = await contractInstance.methods.authorizeOperator(req.params.account).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("authorizeOperator"+e)
        res.send("error authorizeOperator")
    }
})

router.get('/authorizeOperatorByPartition/:partition/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.authorizeOperatorByPartition(req.params.partition,req.params.operator).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("authorizeOperatorByPartition"+e)
        res.send("error authorizeOperatorByPartition")
    }
})
*/
router.get('/issueBypartition/:partition/:tokenHolder/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.issueBypartition(req.params.partition,req.params.tokenHolder,req.params.value,req.params.data).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("issueBypartition"+e)
        res.send("error issueBypartition")
    }
})

router.get('/operatorRedeemByPartition/:partition/:tokenHolder/:value/:data/:operatorData',async(req,res) => {
    try{
        let data = await contractInstance.methods.operatorRedeemByPartition(req.params.partition,req.params.tokenHolder,req.params.value,req.params.data,req.params.operatorData).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("operatorRedeemByPartition"+e)
        res.send("error operatorRedeemByPartition")
    }
})
/*
router.get('/operatorTransferByPartition/:partition/:from/:to/:value/:data/:operatorData:',async(req,res) => {
    try{
        let data = await contractInstance.methods.operatorTransferByPartition(req.params.partition,req.params.from,req.params.to,req.params.value,req.params.data,req.params.operatorData).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("operatorTransferByPartition"+e)
        res.send("error operatorTransferByPartition")
    }
})

router.get('/redeem/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.redeem(req.params.value,req.params.data).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeem"+e)
        res.send("error redeem")
    }
})
*/
router.get('/redeemByPartition/:partition/:value/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.redeemByPartition(req.params.partition,req.params.value,res.params.data).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeemByPartition"+e)
        res.send("error redeemByPartition")
    }
})
/*
router.get('/redeemFrom/:from/:value/:operator/:data',async(req,res) => {
    try{
        let data = await contractInstance.methods.redeemFrom(req.params.from,req.params.value,req.params.operator,req.params.data).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("redeemFrom"+e)
        res.send("error redeemFrom")
    }
})

router.get('/renounceControl',async(req,res) => {
    try{
        console.log("monta")
        await contractInstance.methods.renounceControl().send({from : "0x594059544dEC36b56088cD29d614F196F7400BC7" , gas:gaS})
        .on("error",(error)=>{
            console.log(error)
        })
        .on('receipt',(receipt)=>{
            console.log(receipt)
        })
        res.send(data)
    }catch(e){
        console.log("renounceControl"+e)
        res.send("error renounceControl")
    }
})

router.get('/renounceIssuance',async(req,res) => {
    try{
        //whithout param
        let data = await contractInstance.methods.renounceIssuance().send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceIssuance"+e)
        res.send("error ")
    }
})

router.get('/renounceMinter',async(req,res) => {
    try{
        let data = await contractInstance.methods.renounceMinter().send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceMinter"+e)
        res.send("error renounceMinter")
    }
})

router.get('/renounceOwnership',async(req,res) => {
    try{
        
        let data = await contractInstance.methods.renounceOwnership().send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("renounceOwnership"+e)
        res.send("error renounceOwnership")
    }
})

router.get('/revokeOperator/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.revokeOperator(req.params.operator).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("revokeOperator"+e)
        res.send("error revokeOperator")
    }
})

router.get('/revokeOperatorByPartition/:partition/:operator',async(req,res) => {
    try{
        let data = await contractInstance.methods.revokeOperatorByPartition(req.params.partition,req.params.operator).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("revokeOperatorByPartition"+e)
        res.send("error revokeOperatorByPartition")
    }
})

router.get('/setCertificateSigner/:operator/:authorized',async(req,res) => {
    try{
        let data = await contractInstance.methods.setCertificateSigner(req.params.operator,req.params.authorized).send({from : req.params.address , gas:gaS})
        res.send(data)
    }catch(e){
        console.log("setCertificateSigner"+e)
        res.send("error setCertificateSigner")
    }
})
router.get('/setControllers/:operators',async(req,res) => {
    try {
        let data = await contractInstance.methods.setControllers(req.params.operators).send({from : req.params.address , gas:gaS})
        res.send(data)
    } catch (e) {
        console.log("setControllers"+e)
        res.send("error setControllers")
        
    }
    
})
router.get('/setDefaultPartitions/:partitions',async(req,res) => {
    try {
        let data = await contractInstance.methods.setDefaultpartitions(req.params.partitions).send({from : req.params.address , gas:gaS})
        res.send(data)

        
    } catch (e) {
        console.log("setDefaultPartitions"+e)
        res.send("error setDefaultpartitions")
        
    }
})
*/
router.get('/setDocument/:name/:uri/documentHash',async(req,res) => {
    try {
        let data = await contractInstance.methods.setDocument(req.body.name,req.params.uri,req.params.documentHash).send({from : req.params.address , gas:gaS})
        res.send(data)
    } catch (e) {
        console.log("setDocument"+e)
        res.send("error set Document")
    }
})
/*
router.get('/setPartitionControllers/:partition/:operators',async(req,res) => {
    try {
        let data = await contractInstance.methods.setPartitionControllers(req.params.partition,req.params.operators).send({from : req.params.address , gas :  gaS})
        res.send(data)
    } catch (e) {
        console.log("setPartitionControllers"+e)
        res.send("error setPartitionControllers")
        
    }
})
router.get('/setTokenDefaultPartitions/:defaultPartitions',async(req,res) => {
    try {
        let data = await contractInstance.methods.setTokenDefaultPartitions(req.params.defaultPartitions).send({from : req.params.address , gas : gaS})
        res.send(data)
    } catch (e) {
        console.log("setTokenDefaultPartitions"+e)
        res.send("error setTokenDefaultPartitions")
        
    }
})
router.get('/transferByPartition/:partition/:to/:value/:data',async(req,res) => {
    try {
        let data = await contractInstance.methods.transferByPartition(req.params.partition,req.params.to,req.params.to,req.params.data).send({from : req.params.address , gas : gaS})
        res.send(data)
    } catch (e) {
        console.log("transferByPartition"+e)
        res.send("error transferByPartition")
        
    }
})
router.get('/transferFromWithData/:from/:to/:value/:data/:operatorData',async(req,res) => {
    try {
        let data = await contractInstance.methods.transferFromWithData(req.params.from,req.params.to,req.params.value,req.params.data,req.params.operatorData).send({from : req.params.address , gas : gaS})
        res.send(data)
    } catch (e) {
        console.log("transferFromWithData"+e)
        res.send("error transferFromWithData")
        
    }
})
router.get('/transferOwnership/:newOwner',async(req,res) => {
    try {
        let data = await contractInstance.methods.transferOwnership(req.params.newOwner).send({from : req.params.address , gas : gaS})
        res.send(data)
        
    } catch (e) {
        console.log("transferOwnership"+e)
        res.send("error transferOwnership")
        
    }
})
router.get('/trasnferWithData/:to/:value/:data',async(req,res) => {
    try {
        let data = await contractInstance.methods.trasnferWithData(req.params.to,req.params.value,req.params.data).send({from : req.params.address , gas : gaS})
        res.send(data)
    } catch (e) {
        console.log("trasnferWithData"+e)
        res.send("error trasnferWithData")        
    }
})




module.exports = router;



 