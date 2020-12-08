import {TerrariumSettings} from './TerrariumSettings';
import {SensorsReads} from './SensorsReads';
import {Alert} from './Alert';

export interface Terrarium{
  id?: number;
  name?: string;
  terrariumSettings?: TerrariumSettings;
  sensorsReadsList?: SensorsReads[];
  createDate?: Date;
  alerts?: Alert[];
}

export interface TerrariumResponse{
  _embedded: {
    terrariumList: Terrarium[];
    _links: {self: {href: string}};
    page: {size: number, totalElements: number, totalPages: number, number: number};
  };
}
