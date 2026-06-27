import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://Shaswat:Shas@1925@cluster0.26bvsgk.mongodb.net/?appName=Cluster0`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB