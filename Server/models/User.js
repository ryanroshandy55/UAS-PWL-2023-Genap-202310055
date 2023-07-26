const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: String,
    email: String
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

// app.post('/api/users', (req, res) => {
//     const { username, email, password } = req.body;
  
//     // Check if the username or email already exists
//     db.collection('users')
//       .findOne({ $or: [{ username }, { email }] })
//       .then((existingUser) => {
//         if (existingUser) {
//           return res.status(400).json({ message: 'Username or email already exists' });
//         }
  
//         // Insert the new user into the database
//         db.collection('users')
//           .insertOne({ username, email, password })
//           .then(() => {
//             res.status(201).json({ message: 'User created successfully' });
//           })
//           .catch((error) => {
//             console.error('Error creating user:', error);
//             res.status(500).json({ message: 'Internal server error' });
//           });
//       })
//       .catch((error) => {
//         console.error('Error finding user:', error);
//         res.status(500).json({ message: 'Internal server error' });
//       });
//   });
  