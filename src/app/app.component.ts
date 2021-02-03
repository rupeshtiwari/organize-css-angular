import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { StyleService } from './style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'manage-css';

  constructor(styleService: StyleService) {
   // styleService.execute();
  }
}
