'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('actors', [
      {
      name: 'Salman Khan',
      actor_id: 1,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shahruk Khan',
      actor_id: 2,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Katrina Kaif',
      actor_id: 3,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jacqueline Fernandez',
      actor_id: 4,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Disha Patni',
      actor_id: 5,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Shahid Kapoor',
      actor_id: 6,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pankaj Tripathi',
      actor_id: 7,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Nwazuddin Siddiqui',
      actor_id: 8,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Deepika Padukone',
      actor_id: 9,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Catherine Missal',
      actor_id: 10,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Leonardo DiCaprio',
      actor_id: 11,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Monica Bellucci',
      actor_id: 12,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Michael Doven',
      actor_id: 13,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jasmine Reate',
      actor_id: 14,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tom Cruise',
      actor_id: 15,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Scarlett Johansson',
      actor_id: 16,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anna Raadsveld',
      actor_id: 17,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Emilia Clarke',
      actor_id: 18,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Wentworth Miller',
      actor_id: 19,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Dwayne Johnson',
      actor_id: 20,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rose Byrne',
      actor_id: 21,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rachel McAdams',
      actor_id: 22,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Angelina Jolie',
      actor_id: 23,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jake Gyllenhaal',
      actor_id: 24,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kate Winslet',
      actor_id: 25,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Johnny Depp',
      actor_id: 26,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Arnold Schwarzenegger',
      actor_id: 27,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Vincent Cassel',
      actor_id: 28,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rachel Weisz',
      actor_id: 29,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Robin Williams',
      actor_id: 30,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Chris Hemsworth',
      actor_id: 31,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Paul Walker',
      actor_id: 32,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Linda Fiorentino',
      actor_id: 33,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Robert Downey Jr.',
      actor_id: 34,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Alexandra Daddario',
      actor_id: 35,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Brad Pitt',
      actor_id: 36,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Claudia Koll',
      actor_id: 37,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Samuel L. Jackson',
      actor_id: 38,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Kate Beckinsale',
      actor_id: 39,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jordana Brewster',
      actor_id: 40,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ashley Benson',
      actor_id: 41,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jennifer Connelly',
      actor_id: 42,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Amy Adams',
      actor_id: 43,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Amber Heard',
      actor_id: 44,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Keanu Reeves',
      actor_id: 45,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Helen Mirren',
      actor_id: 46,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Denzel Washington',
      actor_id: 47,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Morgan Freeman',
      actor_id: 48,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Megan Fox',
      actor_id: 49,
      gender: "Female",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Vin Diesel',
      actor_id: 50,
      gender: "Male",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('actors', null, {});
  }
};
