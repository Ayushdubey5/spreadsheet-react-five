export interface TaskRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: string;
}

export interface Sheet {
  id: string;
  name: string;
  isActive: boolean;
}

export interface TabItem {
  id: string;
  name: string;
  isActive: boolean;
}