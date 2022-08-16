import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eGP'
})
export class EGPPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value + 'EGP';
  }

}
