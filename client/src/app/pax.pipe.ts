import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from './__generated__/types';

@Pipe({
  name: 'pax',
  standalone: true,
})
export class PaxPipe implements PipeTransform {
  transform(pax: Passenger): string {
    return `${pax.title} ${pax.firstName} ${pax.lastName}`;
  }
}
