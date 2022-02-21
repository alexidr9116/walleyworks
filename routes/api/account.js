const express = require('express');
const router = express.Router();
const uuidv4 = require('../../utils/uuidv4');
const authMiddleware = require('../../middleware/auth');
const multer = require('multer');
const DIR = 'client/build/images/avatar';

const User = require('../../models/user');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR);
    },
    filename:(req,file,cb)=>{
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null,uuidv4()+"");
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
router.get('/general',authMiddleware,async (req,res) => {
    try
    {
        const user = await User.findById(req.user._id);
        const account = {
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            city:user.city,
            zipCode:user.zipCode,
            state:user.state,
            address:user.address,
            phoneNumber1:user.phoneNumber1,
            country:user.country,
            about:user.about,
            email:user.email,
            avatar:user.avatar,
            socialLink:user.socialLink,
        } 
        return res.status(200).json({find:(user !== null), account,success:true});
    }
    catch(err){
        return res.status(400).json({error:'Your request could not be processed. Please try again.'})
    }
});
router.post('/upload/avatar',authMiddleware,uploader.single('avatar'), async(req,res,next)=>{
    try{
        const destFileName = '/images/avatar/'+req.file.filename;
        await User.findByIdAndUpdate(
            {_id:req.user._id},
            {
                $set:{
                    avatar:destFileName,
                }
            }
        );
        res.status(200).json({success:true,destFile:destFileName});
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:err});
    }    
});
router.post('/set/social',authMiddleware,async(req,res)=>{
    try{
        let update = await User.findByIdAndUpdate(
            {_id:req.user._id},
            {
                $set:{ 
                    socialLink:{...req.body.param}
                }
            }, 
        );
        if(update === null)
            res.status(200).json({success:false,message:'Your account information does not saved'});
            
        else{
            res.status(200).json({success:true,message:'Your links are saved'});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:err});
    }
});

router.post('/set/general',authMiddleware,async(req,res)=>{
    try{
        let update = await User.updateOne(
            {_id:req.user._id},
            {
                $set:{ ...req.body.param}
            },
        );
        if(update === null)
            res.status(200).json({success:false,message:'Your account information does not saved'});
            
        else{
            const user = await User.findById(req.user._id);
            const account = {
                _id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                city:user.city,
                zipCode:user.zipCode,
                state:user.state,
                address:user.address,
                phoneNumber1:user.phoneNumber1,
                country:user.country,
                about:user.about,
                email:user.email,
                avatar:user.avatar,
                socialLink:user.socialLink,
            }
            res.status(200).json({success:true,message:'',account});
        }
            
        
    }
    catch(err){
        console.log(err);
        res.status(400).json({success:false,message:err});
    }
});
module.exports = router; 