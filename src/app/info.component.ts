// Imports
import { Component, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { slideInRightAnimation } from './animations/slide-in-right';

@Component({
    templateUrl: './templates/info.html',
    host: { '[@slideInRightAnimation]': '' },
    animations: [slideInRightAnimation]
})

export class InfoComponent {
    name: 'CHOOVITA | INFO';
}