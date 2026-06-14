const { log } = require("console");
const express = require("express");
const app = express();

const { v4 : uuidv4 } = require("uuid");

const methodOverride = require("method-override");

uuidv4();

const port = 3000;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));

// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))

//array to store data for using in posts in quora page

let posts  = [
    {
        id: uuidv4(),
        username:"bhumikaRawal",
        content: "I am Intelligent"
    },
    {
        id: uuidv4(),
        username:"bijliGhar",
        content: "Pay your Electricity Bill fast!"
    },
    {
        id: uuidv4(),
        username:"Meesho",
        content: "Get more Discounts on Diwali Sale !"
    }
];

//to see all posts on quora
app.get("/posts", (req, res) =>{
    res.render("index.ejs", {posts});
});

//to open form data 
app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
});
 
//to post new post on quora page
app.post("/posts", (req, res) =>{
    let {username, content}=req.body;
    let id = uuidv4();
    posts.push({id, username , content});
    // res.send("post req woking");
    res.redirect("/posts");
});

//show post by id
app.get("/posts/:id", (req, res) =>{
    let { id } = req.params;
    let post = posts.find((post)=> id === post.id);
  
    res.render("show.ejs", {post});
    
});

//edit anchor tag in ejs will send req on edit route
app.get("/posts/:id/edit", (req, res)=>{
    let {id} = req.params;
    let post = posts.find((post)=> id === post.id);
    
    res.render("edit.ejs",{post});
});

//update content or edit of any post
app.patch("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let newContent = req.body.content;

    let post = posts.find((post)=> id === post.id);
    post.content = newContent;
    //console.log(post);
    
    //console.log(id, newContent);
    //res.send("path working")
    res.redirect("/posts");//submit btn will go to all posts page
});



//delete method
app.delete("/posts/:id",(req, res)=>{
    let {id} = req.params;
    posts = posts.filter((post)=> id != post.id);
    res.redirect("/posts");
    
    
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
    
});