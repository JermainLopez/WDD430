import { Component, OnDestroy, OnInit, Output, } from '@angular/core';
import { Ceremony } from '../ceremonies.model';
import { Subscription } from 'rxjs';
import { CeremoniesService } from '../ceremonies.service';


@Component({
  selector: 'app-ceremonies-list',
  templateUrl: './ceremonies-list.component.html',
  styleUrls: ['./ceremonies-list.component.css']
})
export class CeremoniesListComponent implements OnInit, OnDestroy {
  ceremonies: Ceremony[] = [];
  subscription: Subscription;
  term: string = '';

  constructor(private CeremoniesService: CeremoniesService) {}

  ngOnInit(): void {
    this.CeremoniesService.getCeremonies();
    this.subscription = this.CeremoniesService.ceremonyListChangedEvent.subscribe(
      (ceremonies: Ceremony[]) => {
        this.ceremonies = ceremonies;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(value: string) {
    this.term = value;
  }


}
