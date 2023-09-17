const octokit = require('../../middlewares/gitRequest/index');


exports.getRepositorie = async (req, res, next) => {
    try {
        console.log(octokit)
        const data = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'josedpacheco95',
            repo: 'github-repository-task'
        })
        res.json({data })
    } catch(e) {
        next(e);
    }
}