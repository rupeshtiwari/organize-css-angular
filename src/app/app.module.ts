import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleService } from './style.service';
import { initStyles } from './init-styles';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initStyles,
      deps: [StyleService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {} 
