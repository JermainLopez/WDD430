import { Component, Input, OnInit } from '@angular/core';
import { Ceremony } from '../ceremonies.model';

@Component({
  selector: 'app-ceremonies-item',
  templateUrl: './ceremonies-item.component.html',
  styleUrls: ['./ceremonies-item.component.css']
})
export class CeremoniesItemComponent implements OnInit {
  @Input() ceremony: Ceremony;

  constructor() {}

  ngOnInit(): void {}
}
