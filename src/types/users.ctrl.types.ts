export abstract class UsersCtrlTypes {
    abstract getUsers(): string;

    abstract getByUsername(username: string): string;

    abstract getById(userId: string): string

    abstract getFollowers(userId: string): string;

    abstract getFollowee(userId: string): string;

    abstract addUser(): string;

    abstract patchUser(userId: string): void

    abstract updateUser(userId: string): string

    abstract deleteUser(userId: string): string;
}