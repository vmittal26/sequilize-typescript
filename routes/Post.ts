import express from 'express';
import { PostController } from '../controller';

export const postRouter = express.Router();

const postController = new PostController();

postRouter.get('/posts', postController.getPosts);

postRouter.post('/post', postController.createPost);