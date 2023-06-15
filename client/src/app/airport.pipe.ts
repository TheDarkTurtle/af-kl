import { Pipe, PipeTransform } from '@angular/core';
import { Airport } from './__generated__/types';

@Pipe({
  name: 'airport',
  standalone: true,
})
export class AirportPipe implements PipeTransform {
  transform(airport: Airport): string {
    return `${airport.city}, ${airport.name} (${airport.code})`;
  }
}
