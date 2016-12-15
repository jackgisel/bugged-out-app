import { Pipe, PipeTransform } from '@angular/core';
import { SEVERITY } from '../constant/constants';
@Pipe ({
    name: 'severity'
})
export class SeverityPipe implements PipeTransform {
    private severitys = SEVERITY;
    transform(severityNum: number) {
        return this.severitys[severityNum];
    }
}