const mongoose = require('mongoose');
const config = require('config');


// =============================================================================
// MODELS

const User = require('../models/user');


// =============================================================================
// MONGO CONNECTION

console.log('===== DB: CONNECT =====');

// const { port, db, secret }    = require('../config/env');
mongoose.Promise = global.Promise;
mongoose.connect(config.database.url);


// =============================================================================
// DROP DATA

console.log('===== DROPPING DATA =====');

User.collection.drop();


// =============================================================================
// CREATE DATA

const createUsers = () => {
  return User.create([
    {
      username: 'heath center',
      email: 'heathcenter@gmail.com',
      password: 'heathcenter',
      permission: 'heathcenter',
    },
    {
      username: 'mother',
      email: 'mother@gmail.com',
      password: 'mother',
      permission: 'mother',
    },
    {
      username: 'cashpoint',
      email: 'cashpoint@gmail.com',
      password: 'cashpoint',
      permission: 'cashpoint',
    },
    {
      username: 'ministry',
      email: 'ministry@gmail.com',
      password: 'ministry',
      permission: 'ministry',
    },
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
      permission: 'admin',
      ethereum_account_balance: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      ethereum_account_private_key: '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
    }

  ]);
};


console.log('===== CREATING DATA =====');

const createData = async () => {
  await createUsers();
  mongoose.disconnect();
};

createData();


// =============================================================================
// CLOSE MONGO CONNECTION

// console.log('===== DB: DISCONNECT =====');

// mongoose.connection.close();
// mongoose.disconnect();
