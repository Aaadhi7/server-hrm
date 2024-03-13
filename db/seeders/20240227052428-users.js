'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany([
      {
        _id:  "65e15c64ffd472dd229cc437",
        firstname: "adhi",
        lastname: "cr",
        email: "adhi@gmail.com",
        password: "$2a$12$9fhgl.9Kr9KLWoK5thvxk.qbACUNZO319PQddk4P3NIFEfhOWHMJO",
        phone: "9048475227"
      },
      {
        _id: "65e15c92ffd472dd229cc438",
        firstname: "abin",
        lastname : "sasi",
        email: "abin@gmail.com",
        password: "$2a$12$nIlueSiZI3D0DS54SjtUuOm7hQvj9FR91I5OW4K.AaAOtBRSgrJsm",
        phone: "9999958555"
      }
    ])
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in: [
          "65e15c64ffd472dd229cc437",
          "65e15c92ffd472dd229cc438"
        ],
      },
    })
    .then((res)=>{
      console.log(res.deletedCount);
    })
  }
};
