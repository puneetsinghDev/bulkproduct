const express=require('express');
const getProduct = require('../controller/getproduct');
const { testGraphQL } = require('../controller/testGraphQL');
const router=express.Router();

router.get('/', getProduct);
router.get('/graphQL',testGraphQL)
module.exports=router;