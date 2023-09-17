const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: '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' });

module.exports = octokit;