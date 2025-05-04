const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB error", err));

// Define Schemas
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String, 
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  graduationYear: String,
  description: String,
});

const skillSchema = new mongoose.Schema({
  name: String,
  level: String, 
  icon: String,   
});

const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

// Create Models
const Project = mongoose.model("Project", projectSchema);
const Education = mongoose.model("Education", educationSchema);
const Skill = mongoose.model("Skill", skillSchema);
const ContactMessage = mongoose.model("ContactMessage", contactFormSchema);

// Routes for Projects, Education, Skills
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to find projects' });
  }
});

app.get('/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: 'Failed to find education' });
  }
});

app.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Failed to find skills' });
  }
});

// Contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });
    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

app.post('/education', async (req, res) => {
    try {
      const newEducation = new Education(req.body);
      await newEducation.save();
      res.status(201).json(newEducation);
    } catch (err) {
      res.status(500).json({ message: 'Failed to save education' });
    }
  });
  

  app.post('/skills', async (req, res) => {
    try {
      const newSkill = new Skill(req.body);
      await newSkill.save();
      res.status(201).json(newSkill);
    } catch (err) {
      res.status(500).json({ message: 'Failed to save skill' });
    }
  });
  app.post('/projects', async (req, res) => {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).json(newProject);
    } catch (err) {
      res.status(500).json({ message: 'Failed to save project' });
    }
  });
  
  
// Starting Server...
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
