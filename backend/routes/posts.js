const express = require('express');
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    const post = new Post({
      author: userId,
      username: user.username,
      title,
      content
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

router.post('/:id/like', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const userId = req.user.id;

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
      await post.save();
    }

    res.json({ likes: post.likes.length });
  } catch {
    res.status(500).json({ message: 'Error liking post' });
  }
});

router.post('/:id/comment', auth, async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    const post = await Post.findById(req.params.id);

    post.comments.push({
      user: userId,
      username: user.username,
      text
    });

    await post.save();
    res.json(post.comments);
  } catch {
    res.status(500).json({ message: 'Error commenting' });
  }
});

module.exports = router;