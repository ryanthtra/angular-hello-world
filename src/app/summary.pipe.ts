import { Pipe, PipeTransform, Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, limit?: number) {
    if (!value) {
      return null;
    }

    const actualLimit = limit ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
