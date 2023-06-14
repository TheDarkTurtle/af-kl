import { setTimeout} from 'timers/promises';
import { RESTDataSource } from "@apollo/datasource-rest";
import { BookingDTO } from "./booking-types.js";
import mock from "./mock.json" assert { type: "json" };

export class BookingAPI extends RESTDataSource {
  override baseURL = "https://my-rest-api.com/";

  async getBooking(id: string): Promise<BookingDTO> {
    //return this.get<BookingDTO>(`bookings/${encodeURIComponent(id)}`);
    
    return setTimeout(500, mock as BookingDTO);
  }
}
