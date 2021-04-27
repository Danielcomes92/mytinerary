// const User = require('../models/User');

// const usersControllers = {

//     // getUsers: async(req, res) => {
//     //     try {
//     //         const AllUsers = await User.find()
//     //         res.json({
//     //             response: AllUsers,
//     //             success: true                
//     //         })
//     //     } catch (error) {
//     //         res.json({
//     //             error,
//     //             success: false
//     //         })
//     //     }
//     // },

//     addUser: async(req, res) => {
//         const { mail } = req.body
//         const user = new User(req.body)
//         try {
//             await user.save()
//             res.json({
//                 message: 'User added succesfully',
//                 success: true
//             })
//         } catch (error) {
//             res.json({
//                 error,
//                 message: 'User couldnt be added',
//                 success: false
//             })
//         }
//     },

//     logUser: async(req, res) => {



//     }


// }