import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/service/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwtstrategy';
import { AuthController } from './route/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),
    UserModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService,JwtStrategy],
})
export class AuthModule {}
