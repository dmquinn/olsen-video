const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.REACT_APP_MONGODB);
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			`${process.env.REACT_APP_MONGODB}`,
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useCreateIndex: true,
			}
		);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
