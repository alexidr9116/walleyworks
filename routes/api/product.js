const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const ProductCategory = require('../../models/productCategory');
const ProductSize = require('../../models/productSize');
const ProductTag = require('../../models/productTag');
const ProductUserCategory = require('../../models/productUserCategory');
const Product = require('../../models/product');
const ObjectId =  require("mongoose").Types.ObjectId;
const uuidv4 = require('../../utils/uuidv4');
const multer = require('multer');
const DIR = 'client/build/images/product'; 
const path = require('path');
const fs = require('fs');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const dir = path.join(DIR,(req.user._id+""));
        let stat = null;
        try{
            stat = fs.statSync(dir);
        }
        catch(err){
            fs.mkdirSync(dir)
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created');
        } 

        cb(null,dir);
    },
    filename:(req,file,cb)=>{
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null,uuidv4()+"."+fileName.split(".")[1]);
    }

})

const uploader = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ){
            cb(null,true);
        }
        else{
            cb(null,false);
            return cb(new Error('Only ,png, .jpg and .jpeg format allowed'));
        }
    }
});
router.get('/list/:user',authMiddleware,async(req,res)=>{
    try{ 
        const products = await Product.aggregate([
            {
                $match:{
                    seller:req.params.user
                }
            },
            {
                $lookup:{
                    from: "productcategories",
                    localField:'category',
                    foreignField:'key',
                    as:'categories'

                }
            }
        ]) 
        res.status(200).json({success:'true', products});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:'Can not proceed your data'});
    }
});
router.post('/upload/coverImage',authMiddleware,uploader.single('coverImage'),async(req,res)=>{
    try{
        const destFileName = "/images/product/"+req.user._id+"/"+req.file.filename;
       
        await Product.findByIdAndUpdate(
            {_id:req.body.product},
            {
                $set:{
                    coverImage:destFileName,
                }
            }
        );
        res.status(200).json({success:true,message:'Upload single-file success'});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:'Invalid data'});
    }
    
});
router.post('/upload/subImages',authMiddleware,uploader.array('subImages',7), async(req,res)=>{
    try{
        const files = req.files; 
        const subImages = [];
        files.map((file,index)=>{
            const destFileName ="/images/product/"+req.user._id+"/"+file.filename;
            subImages.push(destFileName);
            
        }); 
        if(subImages.length>0){
            await Product.findByIdAndUpdate(
                {_id:req.body.product},
                {
                    $set:{
                        subImages,
                    }
                }
            );
        }
        
        res.status(200).json({success:true,message:'Upload multi-files success'});
    }
    catch(err){
        res.status(400).json({success:false,message:'Invalid data'});
    }
    
});
router.post('/upload/video',authMiddleware,async(req,res)=>{

});

router.post('/upload',authMiddleware,async(req,res)=>{
    try{
        const {_id} = req.body;
        let product = new ObjectId();
        let update = {

            // video: req.body.video,
            description: req.body.description,
            // coverImage:req.body.coverImage,
            // subImages:req.body.subImages,
            price:req.body.price,
            priceSale:req.body.priceSale,
            tags:req.body.tags,
            inStock:req.body.inStock,
            taxes:req.body.taxes,
            weight:req.body.weight,
            sizes:req.body.sizes,
            colors:req.body.colors,
            state:(req.body.state == true || req.body.state == "true") ? "active":"inactive",
            seller:(req.user._id + ""),
        };
        if(_id == undefined || _id == null){
            update.code = req.body.code;
            update.sku = req.body.sku;
            update.category = req.body.category;
            update._id = product;
            update.name = req.body.name; 
            
        }
        else{
            product = _id;
        }
        let result = await Product.updateOne(
            {_id:product},
            {
                $set:update,
            },
            {upsert:true}
        );
        if(result == null)
            res.status(200).json({success:false,message:'Your request does not saved'});
            
        else{
            res.status(200).json({success:true,message:'Save success', product});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:'Invalid data'});
    }
});
router.get('/tags',  async (req,res) => {
    try
    {
        const tags = await ProductTag.find({state:'active'});
        return res.status(200).json({find:(tags != null), tags});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});
router.get('/sizes',  async (req,res) => {
    try
    {
        const sizes = await ProductSize.find({state:'active'});
        return res.status(200).json({find:(sizes != null), sizes});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});
router.get('/categories',  async (req,res) => {
    try
    {
        const categories = await ProductCategory.find({state:'active'});
        return res.status(200).json({find:(categories != null), categories});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});
router.post('/userCategories', authMiddleware, async (req,res) => {
    try
    {
        const user = req.user;
        const userCategories = await ProductUserCategory.find({state:'active',user:user._id});
        return res.status(200).json({find:(userCategories!=null),userCategories});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});

module.exports = router; 