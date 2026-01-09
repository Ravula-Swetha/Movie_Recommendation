const express = require('express');
const router = express();

router.get('/in', (req,res) =>{
    res.send("In Routes");
})

router.post('/mood', async(req,res) =>{
    console.log("Request body: ", req.body);
    const {MoodInput} = req.body;

    try {
        const movieRecomm = await axios.post(`${COLLAB_URL}`, {MoodInput});
        res.status(202).json({response: movieRecomm.data.mesaage});
    }
    catch (err) {
        console.log("Error in movie recommendation", err);
        res.status(500).json({ error: "Error in movie recommendation"});
    }
})

module.exports = router