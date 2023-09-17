const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: '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' });

module.exports = octokit;