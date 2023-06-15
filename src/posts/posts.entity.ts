import {Column, Entity, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import {BaseEntity} from "../common/base.entity";
import UsersEntity from "../users/users.entity";

@Entity({name: 'post'})
export class PostsEntity extends BaseEntity {

    @ManyToOne(() => UsersEntity)
    @JoinColumn({name: 'author_id'})
    author: UsersEntity

    @Column()
    text: string

    @Column('json', {default: []})
    images: Array<string>

    @Column({default: 0})
    like_count: number

    @Column({default: 0})
    repost_count: number;

    @Column('json', {default: []})
    hash_tags: Array<string>

    @OneToOne(() => PostsEntity)
    @JoinColumn({name: 'orig_post_id'})
    orig_post: PostsEntity

    @OneToOne(() => PostsEntity)
    @JoinColumn({name: 'reply_to_id'})
    replyTo: PostsEntity

    @Column('json', {default: []})
    mentions: Array<Mention>
}

interface Mention {
    name: string;
    id: string;
}