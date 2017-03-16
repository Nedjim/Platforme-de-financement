// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('../models/user');
// // var Book = mongoose.model('Book', bookSchema);
//
// router.route('/')
// 			.get(function(req, res){
// 					User.find(function(err, users){
// 						if(err){
// 							res.send(err);
// 						}
// 						res.send(users);
// 					});
// 			})
// 			.post(function(req, res) {
// 				var user = new User();
// 				user.name = req.body.name;
// 				user.username = req.body.username;
// 				user.email = req.body.email;
// 				user.password = req.body.password;
// 				user.image = req.body.image;
//         user.age = req.body.age;
// 				user.date = req.body.date;
// 				user.location = req.body.location;
// 				user.save(function(err){
// 					if(err){
// 						res.send(err);
//
// 					}
// 					res.send({message: 'user have created'});
// 				});
// 			});
// router.route('/:user_id')
//       .get(function(req, res){
//         User.findOne({_id: req.params.user_id}, function(err, book){
//           if(err){
//             res.send(err);
//           }
//             res.send(user);
//           });
//         })
//         .put(function(req, res){
//           User.findOne({_id: req.params.user_id}, function(err, user){
//             user.name = req.body.name;
//     				user.email = req.body.email;
//     				user.password = req.body.password;
//             user.save(function(err){
//               if(err){
//                 res.send(err);
//               }
//               res.send({message: 'user updated'});
//             });
//            });
//
//           })
//       .delete(function(req,res){
//         User.remove({_id: req.params.user_id}, function(err) {
//           if (err) {
//             res.send(err);
//           }
//           res.send({message: "user deleted"});
//         });
//       });
// module.exports = router;
