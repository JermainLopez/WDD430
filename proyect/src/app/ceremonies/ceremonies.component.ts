import { Component, OnInit} from '@angular/core';
import { Ceremony } from './ceremonies.model';
import { CeremoniesService } from './ceremonies.service';


@Component({
  selector: 'app-ceremonies',
  templateUrl: './ceremonies.component.html',
  styleUrls: ['./ceremonies.component.css']
})
export class CeremoniesComponent implements OnInit {
  selectedCeremony: Ceremony;

  constructor(private CeremoniesService: CeremoniesService) {}

  ngOnInit(): void {
    this.CeremoniesService.ceremonySelectedEvent.subscribe((ceremony: Ceremony) => {
      this.selectedCeremony = ceremony;
    });
  }
}
