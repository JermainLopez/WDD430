import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WinRefService } from 'src/app/win-ref.service';
import { Ceremony } from '../ceremony.model';
import { CeremonyService } from '../ceremony.service';


@Component({
  selector: 'app-ceremony-detail',
  templateUrl: './ceremony-detail.component.html',
  styleUrls: ['./ceremony-detail.component.css']
})
export class CeremonyDetailComponent implements OnInit {
  ceremony: Ceremony;

  constructor(
    private ceremonyService: CeremonyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ceremony = this.ceremonyService.getCeremony(params['id']);
    });
  }

  onDelete() {
    this.ceremonyService.deleteCeremony(this.ceremony);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}




