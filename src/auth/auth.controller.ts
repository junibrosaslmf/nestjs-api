import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/aut-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() credentials: AuthCredentialsDto): Promise<void> {
    return this.authService.createUser(credentials);
  }
}
