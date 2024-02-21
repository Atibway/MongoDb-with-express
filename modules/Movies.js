import mongoose from 'mongoose';

//define a schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

//creating model

const MovieModel = mongoose.model('Movie', movieSchema);

//creating new document
// const createDoc = async()=>{
//  try {
//   //create a doc
//   const m1 = new MovieModel({
//    name: "Extraction 2",
//    ratings: 4,
//    money:60000,
//    genre:["action", "adventure"],
//    isActive:true,
//    comments:[{value:"that movie was an amazing movie"}]
//   });
//   const result = await m1.save()
//   console.log(result);

//  } catch (error) {
//   console.log(error);
//  }
// }
// export default createDoc;

//creating many docs

// const allDoc = async () => {
//   try {
//     //create a doc
 
//     const result = await MovieModel.find()
    //console.log(result);

//     //iterating over
//     result.forEach((movie)=>{
//      console.log(movie.ratings);
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default allDoc;

// const singleDoc = async () => {
//   try {
//     //create a doc

//     // const result = await MovieModel.findById('65d4db524683569d9f89ab8c','name');
//     // console.log(result);

//     //find with a field
//     // const result = await MovieModel.find({ratings:4})
//     // const result = await MovieModel.find().limit(3)
//     // const result = await MovieModel.find().skip(7)
//     //  const result = await MovieModel.find().countDocuments()
//     // const result = await MovieModel.find().sort({name: -1})
//     // const result = await MovieModel.find({ money: { $lt: 70000 } });
//     //({money:{$gt: 70000}})
//     //({money:{$ne: 70000}})

//     // const result = await MovieModel.find({
//     //   $or: [{ money: 60000 }, { ratings: 4 }],
//     // });
//     //({$and: [{money:60000},{ratings:4}]});

//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default singleDoc;

const updateDoc = async () => {
  try {
    // //update a doc
    // const result = await MovieModel.updateOne({_id:id},{name:'Extraction 2'})
    ////update many
    // const result = await MovieModel.updateMany({ratings:5},{name:'Extraction 2'})
    //// delete one
    // const result = await MovieModel.findByIdAndDelete(
    //   '65d4e01696ff048749f53e1b'
    // );
    //or 'delete on'
    //// delete many
    // const result = await MovieModel.DeleteMany({ratings:5});

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export default updateDoc;