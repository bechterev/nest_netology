import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class FullExceptionFilters implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const arg = host.switchToHttp();
    const response = arg.getResponse<Response>();
    const request = arg.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      timestamp: new Date().toISOString(),
      status: 'fail',
      data: exception.message,
      code: status,
    });
  }
}
