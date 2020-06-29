const entries = [];

const renderIndex = (req,res)=>{
    res.render("index",{entries})
}


const renderNewEntries = (req,res)=>{
    res.render("newEntry")
}


const createNewEntries = (req,res)=>{
    const newEntry = {
        title:req.body.title,
        body:req.body.body,
        published:new Date()
    }
    entries.push(newEntry)
    res.redirect("/")
}

const renderTest = (req,res)=>{
    res.render("test")
}

module.exports ={
    renderIndex,
    renderNewEntries,
    createNewEntries,
    renderTest
}