import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    getUsers() {
        return this.users;
    }

}
