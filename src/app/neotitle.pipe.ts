import { Pipe, PipeTransform, Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'neotitle'
})
export class NeotitlePipe implements PipeTransform {
  exceptionList = [
    'a',
    'an',
    'and',
    'at',
    'but',
    'by',
    'for',
    'in',
    'nor',
    'of',
    'on',
    'out',
    'so',
    'the',
    'to',
    'up',
    'yet'
  ];

  transform(value: string) {
    const titleCasePipe = new TitleCasePipe();
    value = titleCasePipe.transform(value);

    // Split the string into space-delimited array
    return value
      .split(' ')
      .map((word, index) => {
        return this.exceptionList.indexOf(word.toLowerCase()) !== -1 &&
          index !== 0
          ? word.toLowerCase()
          : word;
      })
      .join(' ');
  }
}
