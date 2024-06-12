import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
mongoose.connect('mongodb://localhost:27017/UpstepAppointment',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
const formDataSchema = new mongoose.Schema({
  Name: String,
  gender: String,
  email: String,
  mobno: String,
  address: String,
  disease: String,
  date: String,
});
const FormDataModel = mongoose.model('FormData', formDataSchema);
app.post('/api/submitFormData', async (req, res) => {
  const formData = new FormDataModel(req.body);
  try {
    await formData.save();
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Error saving form data' });
  }
});

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model('collection', newSchema);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email, password: password });
    if (check) {
      if(password)
      res.json('exist');
    } else {
      res.json('notexist');
    }
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({email:email});
    if (check) {
      res.json('exist');
    }else {
      await collection.create(data);
      res.json('notexist');
    }
  } catch (e) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/appointmentsCount', async (req, res) => {
  const { date } = req.query;

  try {
    const count = await FormDataModel.countDocuments({ date });
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching appointments count:', error);
    res.status(500).json({ error: 'Error fetching appointments count' });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
