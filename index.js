const express = require("express")
const app = express();
const port = 8000;
const users = require("./MOCK_DATA.json")

// define routes

app.get('/api/users' , (req , res)=> {
    return res.json(users)
})

app
  .route("/api/users/:id")
  .get((req , res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
  })
  .put((req , res) => {
    return res.json({status:"pending"})
  })
  .delete((req , res) => {
    return res.json({status:"pending"})
  })

// app.get("/api/users/:id" , (req , res) => {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    // res.json(user)
// })

app.post("/app/users" , (req , res) =>{
    return res.json({status :"pending"});
})
// app.patch("/app/users/:id" , (req , res) =>{
//     return res.json({status :"pending"});
// })
// app.delete("/app/users/:id" , (req , res) =>{
//     return res.json({status :"pending"});
// })


// app.get('/users' , (req , res)=> {
//     const html = `
//     <ul> 
//     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul> 
//     `
//     res.send(html)
// })
app.listen(port , ()=> console.log(`server started at port :${port}`))