import { Module } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { SummaryController } from './summary.controller';
import { ReportService } from 'src/report/report.service';

@Module({
  controllers: [SummaryController],
  providers: [SummaryService, ReportService],
})
export class SummaryModule {}
