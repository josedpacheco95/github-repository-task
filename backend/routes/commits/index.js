const commitsController = require('../../controllers/commits')

const commits = express.Router();

commits.get("/", commitsController.getCommits);

module.exports = commits;
