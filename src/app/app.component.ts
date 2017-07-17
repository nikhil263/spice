import { Component } from '@angular/core';
import { InfoComponent} from './info.component';
import { MenuComponent }   from './menu.component';
import { WelcomeScreenComponent} from './welcomescreen.component';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.html',
  entryComponents: [InfoComponent, WelcomeScreenComponent,MenuComponent]
})
export class AppComponent {
  title = 'app works!';
}
