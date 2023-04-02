import { Component, OnInit } from '@angular/core';
import { Ceremony } from './ceremony.model';
import { CeremonyService } from './ceremony.service';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.css']
})
export class CeremonyComponent implements OnInit {
  selectedCeremony!: Ceremony;
  constructor(private ceremonyService: CeremonyService) {}

  ngOnInit(): void {
    this.ceremonyService.selectedCeremonyEvent.subscribe(
      (ceremony: Ceremony) => {
        this.selectedCeremony = ceremony;
      }
    );
  }
}
