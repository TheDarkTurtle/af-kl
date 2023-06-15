import { Pipe, PipeTransform } from '@angular/core';
import { ContactDetail } from './__generated__/types';

const TYPES_MAP: Record<string, string> = {
  EmailAddress: '✉️',
};

@Pipe({
  name: 'contact',
  standalone: true,
})
export class ContactPipe implements PipeTransform {
  transform(contact: ContactDetail): string {
    return `${TYPES_MAP[contact.type]} ${contact.value}`;
  }
}
