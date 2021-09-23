import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/service/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwtstrategy';
import { AuthController } from './route/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [
    UserModule,
    UserService,
    PassportModule,
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
