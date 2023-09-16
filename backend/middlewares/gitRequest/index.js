const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: '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' });

module.exports = octokit;