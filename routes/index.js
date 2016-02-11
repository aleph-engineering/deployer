var express = require('express');
var router = express.Router();
var models = require('../app/models/models');
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

/**
 * Models
 */
var BasicProfileEntity = models.BasicProfileEntity;
var GitHubRepositoryEntity = models.GitHubRepositoryEntity;
var GitHubUserEntity = models.GitHubUserEntity;
var HiredEntity = models.HiredEntity;
var UserEntity = models.UserEntity;
var UserProviderEntity = models.UserProviderEntity;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'inCubator Deployer' });
});

// JSON API ----------------------------------------------------------------
// get action to deploy incubator
router.get('/api/export_from_localhost', function (req, res) {
    var path_command = path.join(__dirname,'../commands/./mongo_export_db.sh');
    var command = exec(path_command,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            res.json(stdout);
        });
});
// JSON API ----------------------------------------------------------------
// get action to pull the dumps
router.get('/api/pull_dumps', function (req, res) {
    var path_command = getPath("pull_dumps.sh");
    var command = exec(path_command,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            res.json(stdout);
        });
});

// JSON API ----------------------------------------------------------------
// get action to deploy incubator with maven
router.get('/api/deploy_incubator', function (req, res) {
    var path_command = getPath("run_mvn_project.sh");
    var command = exec(path_command,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            console.log(stdout);
            res.json(stdout);
        });
});

// JSON API ----------------------------------------------------------------
// get action to import dumps to mongodb
router.get('/api/import_dumps', function (req, res) {
    var path_command = getPath("mongo_import_db.sh");
    var command = exec(path_command,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            console.log(stdout);
            res.json(stdout);
        });
});

function getPath(fileName){
    return path.join(__dirname,'../commands/./' + fileName);
}
module.exports = router;
