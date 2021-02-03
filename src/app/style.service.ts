import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Injectable({ providedIn: 'root' })
export class StyleService {
  deviceInfo: DeviceInfo;
  constructor(
    private readonly deviceDetectorService: DeviceDetectorService,
    @Inject(DOCUMENT) private readonly document: any
  ) {}

  execute() {
    this.removeIEStylesIfRunningInChrome();
    this.removeMacStylesIfRunningInWindowsOS();
  }

  private removeIEStylesIfRunningInChrome() {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    const head = this.document.getElementsByTagName('head')[0];
    if (this.deviceInfo.browser === 'Chrome') {
      [...(this.document.querySelectorAll('link') as any)]
        .filter((x) => x.href?.indexOf('-ie.css') > -1)
        .forEach((f) => head.removeChild(f));
    }
  }

  private removeMacStylesIfRunningInWindowsOS() {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    const head = this.document.getElementsByTagName('head')[0];
    if (this.deviceInfo.os === 'Windows') {
      [...(this.document.querySelectorAll('link') as any)]
        .filter((x) => x.href?.indexOf('-mac.css') > -1)
        .forEach((f) => head.removeChild(f));
    }
  }
}
