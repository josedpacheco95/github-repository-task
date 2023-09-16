const octokit = require('../../middlewares/gitRequest/index');

exports.getCommits = async( req, res, next) => {
    try {
        const data = await octokit.rest.repos.listCommits({
            onwer: 'josedpacheco95',
            repo: 'github-repository-task'
        })
        return data
    } catch (e) {
        console.log(e)
    }
}