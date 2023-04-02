import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ceremony } from '../ceremony.model';
import { CeremonyService } from '../ceremony.service';



@Component({
  selector: 'app-ceremony-list',
  templateUrl: './ceremony-list.component.html',
  styleUrls: ['./ceremony-list.component.css']
})
export class CeremonyListComponent implements OnInit, OnDestroy {
  ceremonies: Ceremony[] = [];
  subscription: Subscription;
  term: string = '';

  constructor(private ceremonyService: CeremonyService) {}

  ngOnInit(): void {
    this.ceremonyService.getCeremonies();
    this.subscription = this.ceremonyService.ceremonyListChangedEvent.subscribe(
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


