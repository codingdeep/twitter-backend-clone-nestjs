import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PostsCtrlTypes} from "../types/posts.ctrl.types";

@Controller('posts')
export class PostsController implements PostsCtrlTypes {

    @Post('create')
    addPost(
        @Body() post: any
    ): string {
        return "";
    }

    @Delete('delete/:postId')
    deletePost(
        @Param('postId') postId: string
    ): string {
        return "";
    }

    @Get(':postId')
    getPostById(
        @Param('postId') postId: string
    ): string {
        return "get by " + postId;
    }

    @Get()
    getPosts(): string {
        return "";
    }

    @Put('update/:postId')
    updatePost(
        @Param('postId') postId: string,
        @Body('post') post: any
    ): string {
        return "updated by " + postId;
    }
}
