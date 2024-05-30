import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const authHeader: string = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('É preciso fazer login para continuar');
    }

    const [, token] = authHeader.split(' ');

    try {
      // Usar uma asserção de tipo para garantir que o payload é do tipo esperado
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as {
        id: number;
      };
      // Garantir que o payload tem a propriedade 'id'
      if (!decoded || !decoded.id) {
        throw new UnauthorizedException(
          'Token inválido, faça login para continuar',
        );
      }

      req['userId'] = decoded.id;
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException(
          'Token expirado, refaça o login para continuar',
        );
      }
      throw new UnauthorizedException(
        'Token inválido, faça login para continuar',
      );
    }
  }
}
