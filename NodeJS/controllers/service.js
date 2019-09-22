const Web3 = require('web3');
const fs = require('fs')

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

module.exports = {

getSymbole: async function(cb) {    
  
    await contractInstance.methods.symbol()
      .call()
      .then(result => {
        cb(result);
      });

},

getOwner: async function(cb) {    
  
  await contractInstance.methods.owner()
    .call()
    .then(result => {
      cb(result);
    });

},

getControllers: async function(cb) {    
  
  await contractInstance.methods.controllers()
    .call()
    .then(result => {
      cb(result);
    });

},

getTokenDefaultPartitions: async function(cb) {    
  
  await contractInstance.methods.getTokenDefaultPartitions()
    .call()
    .then(result => {
      cb(result);
    });

},

getGranularity: async function(cb) {    
  
  await contractInstance.methods.granularity()
    .call()
    .then(result => {
      cb(result);
    });

},

getIsContrallable: async function(cb) {    
  
  await contractInstance.methods.isContrallable()
    .call()
    .then(result => {
      cb(result);
    });

},

getIsIssuable: async function(cb) {    
  
  await contractInstance.methods.isIssuable()
    .call()
    .then(result => {
      cb(result);
    });

},

getBalanceOfByPartition: async function(partition , From , To , value , data , operator ,cb) {    
  
  await contractInstance.methods.balanceOfByPartition(partition , From , To , value , data , operator )
    .call()
    .then(result => {
      cb(result);
    });

},



getCanTransferBypartition: async function(partition , to , value , data , cb) {    
  
  await contractInstance.methods.canTransferBypartition(partition , to , value , data)
    .call()
    .then(result => {
      cb(result);
    });

},

getDocument: async function(name , cb) {    
  
  await contractInstance.methods.getDocument(name)
    .call()
    .then(result => {
      cb(result);
    });
    
},

getIssueBypartition: async function(partition , tokenHolder , value , data ,address ,cb) {    
  
  await contractInstance.methods.issueBypartition(partition , tokenHolder , value , data)
    .send({from : address , gas:gaS})
    .then(result => {
      cb(result);
    });

},

getOperatorRedeemByPartition: async function(partition , tokenHolder , value , data , operatorData , address ,cb) {    
  
  await contractInstance.methods.operatorRedeemByPartition(partition , tokenHolder , value , data , operatorData)
    .send({from : address , gas:gaS})
    .then(result => {
      cb(result);
    });
},

redeemByPartition: async function(partition , value , data , address , cb) {    
  
  await contractInstance.methods.redeemByPartition(partition , value , data )
    .send({from : address , gas:gaS})
    .then(result => {
      cb(result);
    });
},

setDocument: async function(name , uri , documentHash , address ,cb) {    
  
  await contractInstance.methods.setDocument(name , uri , documentHash)
    .send({from : address , gas:gaS})
    .then(result => {
      cb(result);
    });
},
}