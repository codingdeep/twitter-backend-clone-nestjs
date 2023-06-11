import {Controller} from '@nestjs/common';
import {UsersCtrlTypes} from "../types/users.ctrl.types";

@Controller('users')
export class UsersController implements UsersCtrlTypes {
    addUser(): string {
        return "";
    }

    deleteUser(userId: string): string {
        return "";
    }

    getById(userId: string): string {
        return "";
    }

    getByUsername(username: string): string {
        return "";
    }

    getFollowee(userId: string): string {
        return "";
    }

    getFollowers(userId: string): string {
        return "";
    }

    getUsers(): string {
        return "";
    }

    patchUser(userId: string): void {
    }

    updateUser(userId: string): string {
        return "";
    }
}
