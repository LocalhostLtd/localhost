const mongoose = require("mongoose");

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err: Error) => {
    console.error("Error connecting to MongoDB: ", err);
  });

/*
// Define a schema
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  // Define your schema fields here
  name: String,
  age: Number,
});

// Define a model
const ExampleModel = mongoose.model("Example", exampleSchema);

// Example usage: Create a new document
const exampleDoc = new ExampleModel({
  name: "John",
  age: 30,
});

exampleDoc
  .save()
  .then((doc: any) => {
    console.log("Document saved:", doc);
  })
  .catch((err: any) => {
    console.error("Error saving document:", err);
  });
*/
