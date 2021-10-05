import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() rounded: boolean = false;
  @Input() outline: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
