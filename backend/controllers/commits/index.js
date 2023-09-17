const octokit = require('../../middlewares/gitRequest/index');

exports.getCommits = async( req, res, next) => {
    try {
        const data = await octokit.rest.repos.listCommits({
            owner: 'josedpacheco95',
            repo: 'github-repository-task'
        })
        res.json({data })
    } catch (e) {
        console.log(e)
    }
}