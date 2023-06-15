import {Controller, Delete, Get, Patch, Post, Put} from '@nestjs/common';
import {UsersCtrlTypes} from "../types/users.ctrl.types";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController implements UsersCtrlTypes {

    @Post("create")
    addUser(): string {
        return "";
    }

    @Delete('/delete/:userId')
    deleteUser(userId: string): string {
        return "";
    }

    @Get('geById/:userId')
    getById(userId: string): string {
        return "";
    }

    @Get('getByUsername/:username')
    getByUsername(username: string): string {
        return "";
    }

    @Get('/getfollowee/:userId')
    getFollowee(userId: string): string {
        return "";
    }

    @Get('/getfollowers/:userId')
    getFollowers(userId: string): string {
        return "";
    }

    @Get("")
    getUsers(): string {
        return "";
    }

    @Patch("/patch/:userId")
    patchUser(userId: string): void {
    }

    @Put("/update/:userId")
    updateUser(userId: string): string {
        return "";
    }
}
