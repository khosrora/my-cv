import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './DTOs/create-user.dto';


@Controller('auth')
export class UsersController {

    @Post("/signup")
    createUser(
        @Body() body: createUserDto
    ) {
        console.log(body);
    }

}