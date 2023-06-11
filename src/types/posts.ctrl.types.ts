export abstract class PostsCtrlTypes {
    abstract getPosts(): string;

    abstract getPostById(postId: string): string;

    abstract addPost(post: any): string;

    abstract updatePost(postId, post: any): string;

    abstract deletePost(postId): string;
}