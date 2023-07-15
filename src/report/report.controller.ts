import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportType } from './data/report';
import { ResponseReportDto } from './dto/response-report.dto';

@Controller('report/:type')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post()
  createReport(
    @Body() createReportDto: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ResponseReportDto {
    return this.reportService.createReport(createReportDto, type);
  }

  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ResponseReportDto[] {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ResponseReportDto {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return this.reportService.getReportById(id, reportType);
  }

  @Patch(':id')
  updateReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Body() updateReportDto: UpdateReportDto,
  ): ResponseReportDto {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    return this.reportService.updateReport(id, updateReportDto, reportType);
  }

  @Delete(':id')
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id);
  }
}
