import { Injectable } from '@angular/core';
import { PostI} from '../../shared/models/post.interface';
import { FileI} from '../../shared/models/file.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor() { }

  private savePost(post: PostI){
    const postObj = {
      titlePost: post.titlePost,
      contentPost: post.contentPost,
      imagePost: post.imagePost,
      tagsPost: post.tagsPost

    };
    this.postsCollection.add(postObj);
  }
  


}
