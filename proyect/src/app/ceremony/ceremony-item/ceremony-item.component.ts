import { Component, Input, OnInit } from '@angular/core';
import { Ceremony } from '../ceremony.model';

@Component({
  selector: 'app-ceremony-item',
  templateUrl: './ceremony-item.component.html',
  styleUrls: ['./ceremony-item.component.css']
})
export class CeremonyItemComponent implements OnInit {
  @Input() ceremony: Ceremony;

  constructor() {}

  ngOnInit(): void {}
}



