var express = require('express');
var router = express.Router();

// const ERC1400 = require('./controller.js')
 const USERS = require('../controllers/usercontroller')
// router.use('/erc1400',ERC1400);
 router.use('/users',USERS)

const service = require("../services/contractService");

router.get('/symbole', async (req, res) => {
    service.getSymbole((r)=>{
      res.send(r);
      });
  });

  router.get('/owner', async (req, res) => {
    service.getOwner((r)=>{
      res.send(r);
      });
  });

  router.get('/controllers', async (req, res) => {
    service.getControllers((r)=>{
      res.send(r);
      });
  });

  router.get('/getTokenDefaultPartitions', async (req, res) => {
    service.getTokenDefaultPartitions((r)=>{
      res.send(r);
      });
  });

  router.get('/granularity', async (req, res) => {
    service.getGranularity((r)=>{
      res.send(r);
      });
  });

  router.get('/isContrallable', async (req, res) => {
    service.getIsContrallable((r)=>{
      res.send(r);
      });
  });

  router.get('/isIssuable', async (req, res) => {
    service.getIsIssuable((r)=>{
      res.send(r);
      });
  });

  router.get('/canOperatorTransferByPartition/:partition/:From/:To/:value/:data/:operator', async (req, res) => {
    service.getBalanceOfByPartition(req.body.partition , req.body.From , req.body.To , req.body.value , req.body.data , req.body.operator , (r)=>{
      res.send(r);
      });
  });

  router.get('/canTransferBypartition/:partition/:to/:value/:data', async (req, res) => {
    service.getCanTransferBypartition(req.body.partition , req.body.to , req.body.value , req.body.data , (r)=>{
      res.send(r);
      });
  });

  router.get('/getDocument/:name', async (req, res) => {
    service.getDocument(req.body.name ,(r)=>{
      res.send(r);
      });
  });

  router.get('/issueBypartition/:partition/:tokenHolder/:value/:data', async (req, res) => {
    service.getIssueBypartition(req.body.partition , req.body.tokenHolder , req.body.value , req.body.data ,req.body.address , (r)=>{
      res.send(r);
      });
  });

  router.get('/operatorRedeemByPartition/:partition/:tokenHolder/:value/:data/:operatorData', async (req, res) => {
    service.getOperatorRedeemByPartition(req.body.partition , req.body.tokenHolder , req.body.value , req.body.data , req.body.operatorData , req.body.address , (r)=>{
      res.send(r);
      });
  });

  router.get('/redeemByPartition/:partition/:value/:data', async (req, res) => {
    service.redeemByPartition(req.body.partition , req.body.value , req.body.data , req.body.address , (r)=>{
      res.send(r);
      });
  });

  router.get('/setDocument/:name/:uri/documentHash', async (req, res) => {
    service.setDocument(req.body.name , req.body.uri , req.body.documentHash , req.body.address, (r)=>{
      res.send(r);
      });
  });

  module.exports = router;
