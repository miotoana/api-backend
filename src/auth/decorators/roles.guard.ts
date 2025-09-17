import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
<<<<<<< HEAD
import { ROLES_KEY } from '../decorators/roles.decorators';
=======
import { ROLES_KEY } from '../decorators/roles.decorator';
>>>>>>> 0c05cfa6af6e0182e30aaa2e921143658205d528
import { Role } from '../../common/enum/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(), context.getClass(),
    ]);
    if (!requiredRoles) return true;
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}