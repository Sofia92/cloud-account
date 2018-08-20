/**
 * User: sofia
 * Date: 2018/8/19
 * Version: 1.0.0
 * Description:
 */
import { Component } from '@angular/core';
@Component({
  selector: '[apModal]',
  template: `
    <div class="modal-content">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./modal.scss']
})
export class ApModal {

}
