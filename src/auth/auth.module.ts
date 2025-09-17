<<<<<<< HEAD
// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; // Importar UsersModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule, // Importar para que possamos usar o UsersService
    PassportModule,
    JwtModule.register({
      secret: 'SEU_SEGREDO_SUPER_SECRETO', // Mude isso para uma variável de ambiente em produção!
      signOptions: { expiresIn: '60m' }, // Token expira em 60 minutos
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
=======
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; // <-- Importe o módulo aqui
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'; // Não se esqueça de importar a estratégia

@Module({
  imports: [
    // ESTA LINHA É A SOLUÇÃO PARA O SEU ERRO ATUAL.
    // Ao importar o UsersModule, o AuthModule ganha acesso
    // a tudo que o UsersModule exportou (neste caso, o UsersService).
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SEU_SEGREDO_SUPER_SECRETO', // Mude isso em produção!
      signOptions: { expiresIn: '1h' }, // O token expira em 1 hora
    }),
  ],
  controllers: [AuthController],
  // O AuthService precisa do UsersService e do JwtService
  // A JwtStrategy será usada pelo Passport para validar os tokens
  providers: [AuthService, JwtStrategy],
>>>>>>> 0c05cfa6af6e0182e30aaa2e921143658205d528
})
export class AuthModule {}