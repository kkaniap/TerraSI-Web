export interface TerrariumSettings{
  id?: number;
  lightPower?: number;
  humidityLevel?: number;
  sunriseTime?: string;
  sunsetTime?: string;
  sunSpeed?: number;
  isBulbWorking?: boolean;
  isHumidifierWorking?: boolean;
  autoManagement?: boolean;
}
