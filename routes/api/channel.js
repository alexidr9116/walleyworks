const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const Channel = require('../../models/channel');
router.get('/my-channel',authMiddleware,async (req,res) => {
    try
    {
        const user = req.user;
        const channel = await Channel.findOne({creator:user._id});
        return res.status(200).json({find:(channel !== null), channel});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});

router.post('/set',authMiddleware,async(req,res)=>{
    try{
        const user = req.user;
        let channel = await Channel.updateOne(
            {creator:user._id},
            {
                $set:{ ...req.body.param}
            },
            {upsert:true}
        );
        if(channel == null)
            res.status(200).json({success:false,message:'Your channel do not saved'});
            
        else{
            
            channel = await Channel.findOne({creator:user._id});
            res.status(200).json({success:true,message:'',channel});
        }
            
        
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:err});
    }
});
module.exports = router; 