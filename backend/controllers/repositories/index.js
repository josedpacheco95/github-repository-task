const octokit = require('../../middlewares/gitRequest/index');


exports.getRepositorie = async (req, res, next) => {
    try {
        const data = await octokit.rest.repos.getRepositorie({
            onwer: 'josedpacheco95',
            repo: 'github-repository-task'
        })
        return data;
    } catch(e) {
        next(e);
    }
}