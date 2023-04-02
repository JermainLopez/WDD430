import { Pipe, PipeTransform } from '@angular/core';
import { Ceremony } from './ceremony.model';

@Pipe({
  name: 'ceremoniesFilter'
})
export class CeremoniesFilterPipe implements PipeTransform {

  transform(ceremonies: Ceremony[], term: string): any {
    let filteredCeremonies = ceremonies.filter((c) =>
      c.name.toLowerCase().includes(term.toLowerCase())
    );
    if (filteredCeremonies.length < 1) return ceremonies;
    return filteredCeremonies;
  }

}
