import { ReportType } from '../data/report';
import { Exclude, Expose } from 'class-transformer';

export class ResponseReportDto {
  id: string;
  source: string;
  amount: number;

  @Expose({ name: 'createdAt' })
  getCreatedAt(): Date {
    return this.created_at;
  }

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ResponseReportDto>) {
    Object.assign(this, partial);
  }
}
