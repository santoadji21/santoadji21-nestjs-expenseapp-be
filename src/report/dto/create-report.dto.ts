import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateReportDto {
  @IsString()
  source: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
