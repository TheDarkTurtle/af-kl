import { RESTDataSource } from "@apollo/datasource-rest";
import { BookingDTO } from "./booking-types.js";

export class BookingAPI extends RESTDataSource {
  override baseURL = "https://my-rest-api.com/";

  async getBooking(id: string): Promise<BookingDTO> {
    return this.get<BookingDTO>(`bookings/${encodeURIComponent(id)}`);
  }
}
