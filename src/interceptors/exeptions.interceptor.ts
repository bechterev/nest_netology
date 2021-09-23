import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, throwError, tap } from 'rxjs';

@Injectable()
export class ExeptionsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        return { status: 'success', data: data };
      }),
      catchError((error) => {
        throw { status: 'failed is bad', data: error };
      }),
    );
  }
}
