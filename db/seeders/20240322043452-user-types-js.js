'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.user_types
    .insertMany([
      {
        _id : "65fd0d8a96af996fdfb36c79",
        user_type : "admin"
      },
      {
        _id :  "65fd0da796af996fdfb36c7a",
        user_type : "employee"
      }
    ])
    .then((res) =>{
      console.log(res.insertedCount)
    });
    
  },

  down: (models, mongoose) => {
  return models.user_types
  .deleteMany({
    _id :{
      $in:[
        "65fd0d8a96af996fdfb36c79",
        "65fd0da796af996fdfb36c7a",
        

      ],
    },
  })
  .then((res) =>{
    console.log(res.deletedCount)
  });
  },
};
