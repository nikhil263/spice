import { Component } from '@angular/core';

import {  ActivatedRoute } from '@angular/router';
import { slideInLeftAnimation } from './animations/slide-in-left';


@Component({

  templateUrl: './templates/welcome-screen.html',
  host: { '[@slideInLeftAnimation]': '' },    
    animations: [slideInLeftAnimation]
})

export class WelcomeScreenComponent {
  
}