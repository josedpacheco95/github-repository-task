const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: process.env.APP_GITHUBKEY });

module.exports = octokit;