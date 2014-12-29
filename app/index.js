'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Ahoy! Let us generate a ' + chalk.green('Tempo UI Prototype') + '!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'projectName',
      message : 'What is your project name?',
      default : 'A Team Report' // Default to current folder name
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
      this.entity = props.entity;
      this.log(String(this.anotherOption));
      done();
    }.bind(this));
  },

  writing: {

    app: function () {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('README.md', 'README.md');
    },

    projectfiles: function () {
      this.copy('editorconfig', '.editorconfig');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
