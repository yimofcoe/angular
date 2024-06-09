const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  nickname: { type: String },
  position: { type: String },
  nationality: { type: String },
  telephone: { type: String },
  startingDate: { type: Date },
  picture: { type: String, default: '' }, // URL or base64 string
  coverPhoto: { type: String, default: '' }, // URL or base64 string
  address: { type: String },
  subDistrict: { type: String },
  district: { type: String },
  province: { type: String },
  postalCode: { type: String },
  facebook: { type: String },
  lineId: { type: String },
  instagram: { type: String },
  education: [{
    year: { type: Number },
    universityName: { type: String }
  }],
  experience: [{
    position: { type: String },
    company: { type: String },
    startDate: { type: Date },
    endDate: { type: Date }
  }],
  skills: [{
    name: { type: String },
    level: { type: Number }
  }],
  interests: [{ type: String }],
  guilds: [{ type: String }]
}, { versionKey: false });

// Create model
const User = mongoose.model('User', userSchema);

module.exports = { connectDB, User };