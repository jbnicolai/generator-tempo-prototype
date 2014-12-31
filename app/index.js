'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');


module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');

    //suggest the directory name as a project name
    this.suggestedname = this._.titleize(this._.humanize(path.basename(process.cwd())));
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Ahoy! Let us generate a ' + chalk.green('Tempo UI Prototype') + '!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'projectAuthor',
      message : 'What is your name?',
      default : 'Arnþór Snær Sævarsson' // Default to current author 
    },{
      type    : 'input',
      name    : 'projectName',
      message : 'What is your project name?',
      default : this.suggestedname // Default name
    },{
      type    : 'input',
      name    : 'projectDescription',
      message : 'Describe the project, user POV:',
      default : 'View a report about my team' // Default name
    },{
      type: "list",
      name: "entity",
      message: "Which entity are you designing for?",
      choices: [
        "User",
        "Team",
        "Program",
        "Account",
        "Customer",
        "Advanced"
        ]
      }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      this.projectName = props.projectName;
      this.projectDescription = props.projectDescription;
      this.projectAuthor = props.projectAuthor;
      this.entity = props.entity;
      this.log(String(this.anotherOption));
      done();
    }.bind(this));
  },

  writing: {

    app: function () {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.copy('live-server.js', 'live-server.js');
      this.template('README.md', 'README.md');

      this.directory('app', 'app');
      this.template('app/index.html', 'app/index.html');
      this.template('app/context/context.js','app/context/context.js');
    },

    projectfiles: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('bowerrc', '.bowerrc');

    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }

});
