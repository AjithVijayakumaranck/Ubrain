const router = require('express').Router();
const multer = require('multer');
const fileControllers = require('../Controllers/fileControllers');
const userControllers = require('../Controllers/userControllers');




const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('file saving');
        cb(null, './StaticFiles/postImages')
    },
    filename: (req, file, cb) => {
        console.log('file saving');
        cb(null, Date.now() + '--' + file.originalname)
    }
})


const upload = multer({ storage: fileStorageEngine })

router.post('/uploadfile',upload.single("file"),fileControllers.upload)

router.get("/getfiles/:id",fileControllers.getFiles)

router.delete('/deletefile/:id',fileControllers.deleteFile)

router.post('/login',userControllers.login)

router.post('/signup',userControllers.signup)


module.exports = router
