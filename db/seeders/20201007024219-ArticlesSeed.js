"use strict";

const faker = require("faker");
const random = (n) => {
  return Math.floor(Math.random() * Math.floor(n));
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Articles",
      [
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: faker.company.catchPhraseDescriptor(),
          body: faker.lorem.paragraphs(),
          claps: Math.floor(Math.random()*2000),
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
