const octokit = require('../../middlewares/gitRequest/index');


exports.getRepositories = async (req, res, next) => {
    try {
        const data = octokit.rest.repos.listPublic()
        return data;
    } catch(e) {
        next(e);
    }
}