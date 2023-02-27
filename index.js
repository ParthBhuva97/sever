const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const Student = require("./models/Student");
const Course = require("./models/Courses");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://parthbhuva97:30112002@project-01.xev4v1k.mongodb.net/Project-01?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.get('/', function(req, res){
  res.json({"hello":"world"});
})
app.get('/getStudents', async (req, res) => {
  Student.find({},(err,result) => {
    if(err) throw err;
    res.json(result);
  })
});

app.get('/getSem', async (req,res)=>{
  Course.find({},(err,result)=>{
    if(err) throw err;
    res.json(result);
  })
});

app.post("/addStudent", async (req, res) => {
    const name = req.body.name;
    const course = req.body.course;
    const sem = req.body.sem;
    const year = req.body.year;
    const from = req.body.from;
    const about = req.body.about;
    const insta = req.body.insta;
    const github = req.body.github;

  
    const student = new Student({studentName:name,course:course,sem:sem,year:year,from:from,about:about,insta:insta,github:github})

    try{
        await student.save();
        console.log("Done");
    }
    catch(err){
        console.log(err);
    }
  res.send("Response from server");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
