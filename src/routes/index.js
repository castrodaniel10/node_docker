const { Router } = require('express');

const router = Router();

router.get('/',(req, res)=> res.json({message:'Hello UAEMex'}));

module.exports = router;