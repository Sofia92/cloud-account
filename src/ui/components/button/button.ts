/**
 * User: sofia
 * Date: 2018/8/7
 * Version: 1.0.0
 * Description:
 */
import { AfterViewInit, Directive, Input, OnChanges } from '@angular/core';
type ButtonType = 'primary' | 'default' | 'dashed' | 'danger';
type ButtonSize = 'large' | 'default' | 'small';

@Directive({
  selector: '[ap-button]'
})
export class ApButton implements AfterViewInit, OnChanges {
  @Input() type: ButtonType;
  @Input() size: ButtonSize;


  @Input()


  ngOnChanges() {
  }

  ngAfterViewInit() {

  }


}
