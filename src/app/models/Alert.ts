import {AlertType} from './AlertType';

export interface Alert{
  id?: number;
  createDate?: Date;
  type?: AlertType;
  level?: string;
}
