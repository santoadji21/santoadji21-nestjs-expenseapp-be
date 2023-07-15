import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
export class ReportInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next.handle().pipe(
      map((data) => {
        console.log('After...');
        return {
          data,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
