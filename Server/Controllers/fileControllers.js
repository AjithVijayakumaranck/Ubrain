const { drop } = require("../modals/fileModal")
const fs = require('fs')



module.exports = {
    upload: async (req, res) => {
        
        try {
            console.log(req.file,"file");
            const file = await new drop({
                fileName: req.file.filename,
                metadata :fs.statSync(`StaticFiles/postImages/${req.file.filename}`),
                user:req.body.user
        
            })
            file.save().then((response) => {
                res.status(200).json("helkll")
            }).catch((error) => {
                res.status(500)
            })

        } catch (error) {

            res.status(500)

        }
    },
    getFiles:(req,res)=>{
        try {
            drop.find({deleted:false,user:req.params.id}).then((response)=>{
                console.log(response);
                res.send(response)
            })
        } catch (error) {
            
        }
    },
    deleteFile:(req,res)=>{
        let {id} = req.params
        drop.updateOne({_id:id},{deleted:true}).then((response)=>{
            res.status(200).json({msg:"success"})
        })
    }

}