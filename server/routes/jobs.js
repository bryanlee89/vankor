const Express = require('express');
const JobPostModel = require('../models/JobPost');
const isAuthenticated = require('../middlewares/requireLogin');

const router = Express.Router();

// Route /api/jobs
// Retrieve all
router.get('/', (req, res, next) => {
  JobPostModel.find({})
    .then((posts) => {
      console.log(' Get posts ', posts);
      res.json(posts);
    })
    .catch((err) => {
      next(err);
    });
});

// TODO: Paginate?

// Create
router.post('/', isAuthenticated, (req, res, next) => {
  console.log('[JobPostModel][POST]');
  // console.log(' data = ', req.body);
  const post = new JobPostModel({ ...req.body });
  post
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      next(err);
    });
});

// Get by id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  JobPostModel.findById(id)
    .then((result) => {
      console.log('[JobPostModel][GET][:ID]', result);
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
});

// Update
router.put('/:id', (req, res) => {});

// Delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  JobPostModel.findById({ id }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
