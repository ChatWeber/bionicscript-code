const express = require("express")
const router = express.Router()
const wikipedia = require("wikipedia")


router.get("/autocomplete", (req, res)=>{
    wikipedia.default.autocompletions(req.query.query,{limit: 10}).then((suggestions)=>{
        let suuggestionKeywords = ``
        suggestions.forEach((value)=>{
            suuggestionKeywords = suuggestionKeywords + `
            <span class="wikipedia-suggestion">
            ${value}
           </span>  
            `
        })

        res.json({data: suuggestionKeywords})
    
    }).catch((err)=>{
        console.log(err);
    })
})



module.exports = router