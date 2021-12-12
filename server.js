const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dbExample", {userNewUrlParser: true}) // added line in 10-stu

const databaseUrl = "warmup";
const collections = ["books"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

app.post("/exercise", ({ body }, res) => {
  const exercise = body;

  exercise.read = false;

  db.exercises.save(book, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.post("/exercise?", ({ body }, res) => {
  const exercise = body;

  exercise.read = false;

  db.exercises.save(book, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get("/stats", (req, res) => {
  db.exercisess.find({ read: true }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get("/", (req, res) => {
  db.exercises.find({ read: false }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

//just in case if I have to create put route later
// app.put("/markread/:id", ({ params }, res) => {
//   db.exercsises.update(
//     {
//       _id: mongojs.ObjectId(params.id)
//     },
//     {
//       $set: {
//         read: true
//       }
//     },

//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
