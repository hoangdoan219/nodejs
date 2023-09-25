import express from "express"

const homePage = (req, res)=>{
    return res.render("home")
}

export default homePage