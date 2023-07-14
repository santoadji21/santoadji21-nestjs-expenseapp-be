import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { report, ReportType } from './data/report';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  createReport(
    @Body() createReportDto: CreateReportDto,
    @Param('type') type: string,
  ) {
    // return this.reportService.create(createReportDto);
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    const newReport = {
      id: uuid(),
      ...createReportDto,
      created_at: new Date(),
      updated_at: new Date(),
      type: reportType,
    };
    report.report.push(newReport);
    return newReport;
  }

  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return report.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return report.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  @Patch(':id')
  updateReport(
    @Param('id') id: string,
    @Param('type') type: string,
    @Body() updateReportDto: UpdateReportDto,
  ) {
    // return this.reportService.update(+id, updateReportDto);
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    const reportIndex = report.report
      .filter((report) => report.type === reportType)
      .findIndex((report) => report.id === id);
    const updatedReport = {
      ...report.report[reportIndex],
      ...updateReportDto,
      updated_at: new Date(),
    };
    report.report[reportIndex] = updatedReport;
    return updatedReport;
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.reportService.remove(+id);
  }
}
