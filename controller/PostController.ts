import { posts } from '../mockData';
import { Request, Response } from 'express';

export class PostController {

  getPosts(req: Request, res: Response) {
    res.status(200).json(posts);
  }

  createPost(req:Request , res:Response){
    const { title , content} = req.body;
    const newPost = {
      title , content , id: posts.length +1
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  }
}