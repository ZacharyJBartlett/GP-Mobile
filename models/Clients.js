import mongoose from 'mongoose';

const Clients =  mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
  	type: String,
  },
  address: {
  	type: String,
  },
  city: {
  	type: String,
  },
  zip: {
    type: Number,
  },
});

export default mongoose.model('Clients', new Clients);
