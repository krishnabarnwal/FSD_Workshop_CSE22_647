const express = require("express");
const app = express();

app.use(express.json());

let student = {
    id: 1,
    name: "Rohan",
    rollno: 20,
    email: "abc@gmail.com",
    course: "BCA"
};

app.get("/student", (req, res) => {
    res.send(student);
});

app.post("/student", (res, req) =>  {
    student = {...student,...req.body};
    res.send("Student added successfully");
});

app.put("/student", (req, res) => {
    student = {...student,...req.body};
    res.send("Student updated successfully");
});

app.delete("/student", (req, res) => {
    student = {};
    res.send("Student deleted successfully");
});

app.listen(4000, () => {
    console.log("Server running on https://localhost:4000");
});
