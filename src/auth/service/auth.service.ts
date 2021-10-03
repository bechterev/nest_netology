import { forwardRef, Inject, Injectable, Ip } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(()=>UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
    email: string,
  ): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user || (await !bcrypt.compare(password, user.password))) {
      return null;
    }
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
