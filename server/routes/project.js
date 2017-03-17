const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = require('../models/project');
// var Book = mongoose.model('Book', bookSchema);

router.route('/')
			.get(function(req, res){
					Project.find(function(err, projects){
						if(err){
							res.send(err);
						}
						res.send(projects);
					});
			})
			.post(function(req, res) {
				var project = new Project();
        project.name = req.body.name;
        project.id = req.body.id;
        project.email = req.body.email;
        project.description = req.body.description;
        project.image = req.body.image;
        project.date = req.body.date;
        project.location = req.body.location;
        project.fixedAmount = req.body.fixedAmount;
        project.wantedAmount = req.body.wantedAmount;
        project.receivedAmount = req.body.receivedAmount;
				project.urlImage = req.body.urlImage;
				project.save(function(err){
					if(err){
						res.send(err);

					}
					res.send({message: 'project have created'});
				});
			});
router.route('/:project_id')
      .get(function(req, res){
        User.findOne({_id: req.params.user_id}, function(err, project){
          if(err){
            res.send(err);
          }
            res.send(project);
          });
        })
        .put(function(req, res){
          Project.findOne({_id: req.params.project_id}, function(err, project){
            project.name = req.body.name;
            project.id = req.body.id;
            project.email = req.body.email;
            project.description = req.body.description;
            project.image = req.body.image;
            project.date = req.body.date;
            project.location = req.body.location;
            project.fixedAmount = req.body.fixedAmount;
            project.wantedAmount = req.body.wantedAmount;
            project.receivedAmount = req.body.receivedAmount;
						project.urlImage = req.body.urlImage;
            project.save(function(err){
              if(err){
                res.send(err);
              }
              res.send({message: 'project updated'});
            });
           });

          })
      .delete(function(req,res){
        Project.remove({_id: req.params.project_id}, function(err) {
          if (err) {
            res.send(err);
          }
          res.send({message: "project deleted"});
        });
      });
module.exports = router;
