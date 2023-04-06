import { Component, OnInit } from '@angular/core';
import { Ceremony } from '../ceremonies.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CeremoniesService } from '../ceremonies.service';

@Component({
  selector: 'app-ceremonies-edit',
  templateUrl: './ceremonies-edit.component.html',
  styleUrls: ['./ceremonies-edit.component.css']
})
export class CeremoniesEditComponent implements OnInit {
  originalCeremony: Ceremony;
  ceremony: Ceremony;
  groupCeremonies: Ceremony[] = [];
  editMode: boolean = false;
  id: string;

  constructor(
    private CeremoniesService: CeremoniesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id === undefined || this.id === null) {
        this.editMode = false;
        return;
      }
      this.originalCeremony = this.CeremoniesService.getCeremony(this.id);
      if (this.originalCeremony === undefined || this.originalCeremony === null) {
        return;
      }
      this.editMode = true;
      this.ceremony = JSON.parse(JSON.stringify(this.originalCeremony));
      if (this.originalCeremony.group !== null) {
        this.groupCeremonies = this.ceremony.group;
      }
    });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newCeremony = new Ceremony(
      value.name,
      value.description,
      value.phone,
      value.imageUrl,
      this.groupCeremonies
    );
    if (this.editMode) {
      this.CeremoniesService.updateCeremony(this.originalCeremony, newCeremony);
    } else {
      this.CeremoniesService.addCeremony(newCeremony);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  /* DRAG AND DROP METHODS */
  addToGroup($event: any) {
    const selectedCeremony: Ceremony = $event.dragData;
    if (this.isInvalidCeremony(selectedCeremony)) return;
    this.groupCeremonies.push(selectedCeremony);
  }

  isInvalidCeremony(newCeremony: Ceremony) {
    if (!newCeremony) return true;
    if (this.ceremony && newCeremony.id === this.ceremony.id) return true;
    return this.groupCeremonies.some((c) => newCeremony.id === c.id);
  }

  onRemoveItem(index: number) {
    if (index < 0 || index >= this.groupCeremonies.length) return;
    this.groupCeremonies.splice(index, 1);
  }
}
