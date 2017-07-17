import { Component, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
//import { slideInRightAnimation } from './animations/slide-in-right';

@Component({ 
 templateUrl: './templates/menu.html',

})

export class MenuComponent { 
public pages = [
        {title: "Page 1", color: "white"},
        {title: "Page 2", color: "green"}
    ];

}