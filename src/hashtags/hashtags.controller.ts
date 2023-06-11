import {Controller, Get, Param} from '@nestjs/common'

@Controller('hashtags')
export class HashTagsController implements HashtagsCtrlTypes{
    @Get('/')
    getHashTags() {
        return 'Rubel'
    }
    @Get('/:tag/posts')
    getPostByHashTag(
        @Param('tag') tag: string
    ): string {
        return "";
    }

}
