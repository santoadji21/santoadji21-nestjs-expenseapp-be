export enum ReportType {
  EXPENSE = 'expense',
  INCOME = 'income',
}

interface Report {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const report: Report = {
  report: [
    {
      id: 'uuid1',
      source: 'source1',
      amount: 6500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid2',
      source: 'source2',
      amount: 5000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'source3',
      amount: 6000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid4',
      source: 'source4',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid5',
      source: 'source5',
      amount: 3000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid6',
      source: 'source6',
      amount: 9000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid7',
      source: 'source7',
      amount: 4500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid8',
      source: 'source8',
      amount: 2000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};
