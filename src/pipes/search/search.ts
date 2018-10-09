import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}