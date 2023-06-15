import {Controller, Get, Param} from '@nestjs/common'
import {ApiTags} from "@nestjs/swagger";

@ApiTags('hashtags')
@Controller('hashtags')
export class HashTagsController implements HashtagsCtrlTypes {
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
