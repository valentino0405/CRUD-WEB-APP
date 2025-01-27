import mongoose from "mongoose"


const Connection=async(username,password)=>
{
    const URL=`mongodb+srv://${username}:${password}@crud-app.vq55k.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-APP`;
    try{
           await mongoose.connect(URL);
            console.log('Database connected succesfully');
    }catch(error){
        console.log('Error in connecting with database',error);
    }
}
export default Connection;