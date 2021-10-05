import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-hero',
  templateUrl: './default-hero.component.html',
  styleUrls: ['./default-hero.component.scss']
})
export class DefaultHeroComponent implements OnInit {

  @Input() title: string = 'Apollo Jewelry Store'
  @Input() description: string = 'Nullam fermentum justo sed lacus molestie elementum.';

  constructor() { }

  ngOnInit(): void {
  }

}
