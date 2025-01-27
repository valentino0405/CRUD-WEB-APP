import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose); // Initialize the plugin with mongoose

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
});

userSchema.plugin(AutoIncrement, { inc_field: "id" }); // Use the initialized plugin

const User = mongoose.model("User", userSchema);

export default User;
