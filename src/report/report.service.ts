import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { report, ReportType } from './data/report';
import { v4 as uuid } from 'uuid';
import { ResponseReportDto } from './dto/response-report.dto';

@Injectable()
export class ReportService {
  createReport(createReportDto: CreateReportDto, type: string) {
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
    return new ResponseReportDto(newReport);
  }

  getAllReports(type: ReportType): ResponseReportDto[] {
    return report.report
      .filter((report) => report.type === type)
      .map((report) => new ResponseReportDto(report));
  }

  getReportById(id: string, type: ReportType): ResponseReportDto {
    const reportType =
      type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
    const reportDetail = report.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    return new ResponseReportDto(reportDetail);
  }

  updateReport(
    id: string,
    updateReportDto: UpdateReportDto,
    type: ReportType,
  ): ResponseReportDto {
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
    return new ResponseReportDto(updatedReport);
  }

  deleteReport(id: string) {
    const reportIndex = report.report.findIndex((report) => report.id === id);
    report.report.splice(reportIndex, 1);

    if (reportIndex === -1) {
      return 'Report not found';
    }
    return 'Report deleted successfully';
  }
}
