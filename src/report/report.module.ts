import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  controllers: [ReportController],
  providers: [
    ReportService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class ReportModule {}
