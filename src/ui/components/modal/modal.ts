/**
 * User: sofia
 * Date: 2018/8/19
 * Version: 1.0.0
 * Description:
 */
import { Component, HostBinding, Input } from '@angular/core';
@Component({
  selector: '[apModal]',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./modal.scss']
})
export class ApModal {
  @Input('open')
  @HostBinding('class.open')
  open = false;

  @HostBinding('class.ap-ui-modal')
  private classSelector = true;

  @HostBinding('style.width')
  get modalWidth() {
    return `${window.innerWidth}px`;
  }

  @HostBinding('style.height')
  get modalHeight() {
    return `${window.innerHeight}px`;
  }
}
