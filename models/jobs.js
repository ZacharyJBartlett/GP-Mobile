import mogoose from 'mongoose';

const JobsSchema = mongoose.Schema({
  date: {
    type: String
  },
    type: {
  	type: String
  }, 
  materials: {
    type: Stringzz
  },
  bid: {
    type: String
  },
   jobOpen: {
    type: String
  }, 
  notes: {
    type: String
  }
})

export default mongoose.model('JobsSchema', new JobsSchema);
