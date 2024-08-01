import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  age: {
    type: Number,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);

// app.post("/api/users", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(200).send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
