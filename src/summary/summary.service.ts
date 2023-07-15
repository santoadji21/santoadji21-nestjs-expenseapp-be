import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/report/data/report';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}

  getCalculatedSummary() {
    const inCome = this.reportService.getAllReports(ReportType.INCOME);
    const expense = this.reportService.getAllReports(ReportType.EXPENSE);

    const detailData = [
      ...inCome.map((item) => ({
        source: item.source,
        amount: item.amount,
        type: item.type,
      })),
      ...expense.map((item) => ({
        source: item.source,
        amount: item.amount,
        type: item.type,
      })),
    ];

    const totalIncome = inCome.reduce((acc, cur) => acc + cur.amount, 0);
    const totalExpense = expense.reduce((acc, cur) => acc + cur.amount, 0);
    const balance = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      balance,
      detailData,
    };
  }
}
