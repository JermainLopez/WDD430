import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ceremony } from '../ceremonies.model';
import { CeremoniesService } from '../ceremonies.service';
import { WinRefService } from 'src/win-ref.service';



@Component({
  selector: 'app-ceremonies-detail',
  templateUrl: './ceremonies-detail.component.html',
  styleUrls: ['./ceremonies-detail.component.css']
})
export class CeremoniesDetailComponent implements OnInit {
  ceremony: Ceremony;

  constructor(
    private CeremoniesService: CeremoniesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ceremony = this.CeremoniesService.getCeremony(params['id']);
    });
  }

  onDelete() {
    this.CeremoniesService.deleteCeremony(this.ceremony);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
