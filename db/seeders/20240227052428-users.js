'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany([
      {
        _id:  "65f28411f84173b574e35600",
        first_name: "adhi",
        last_name: "cr",
        email: "adhi@gmail.com",
        password: "$2a$12$9fhgl.9Kr9KLWoK5thvxk.qbACUNZO319PQddk4P3NIFEfhOWHMJO",
      
      },
      {
        _id: "65f2845ff84173b574e35602",
        first_name: "abin",
        last_name : "sasi",
        email: "abin@gmail.com",
        password: "$2a$12$nIlueSiZI3D0DS54SjtUuOm7hQvj9FR91I5OW4K.AaAOtBRSgrJsm",
       
      }
    ])
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in: [
          "65f28411f84173b574e35600",
          "65f2845ff84173b574e35602"
        ],
      },
    })
    .then((res)=>{
      console.log(res.deletedCount);
    })
  }
};
