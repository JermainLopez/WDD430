import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MemoriesComponent } from './memories/memories.component';
import { MemoriesDetailComponent } from './memories/memories-detail/memories-detail.component';
import { MemoriesEditComponent } from './memories/memories-edit/memories-edit.component';

import { CeremoniesComponent } from './ceremonies/ceremonies.component';
import { CeremoniesDetailComponent } from './ceremonies/ceremonies-detail/ceremonies-detail.component';
import { CeremoniesEditComponent } from './ceremonies/ceremonies-edit/ceremonies-edit.component';

import { PeopleListComponent } from './people/people-list/people-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/ceremony', pathMatch: 'full' },
  {
    path: 'ceremonies',
    component: CeremoniesComponent,
    children: [
      { path: 'new', component: CeremoniesEditComponent },
      { path: ':id', component: CeremoniesDetailComponent },
      { path: ':id/edit', component: CeremoniesEditComponent },
    ],
  },
  { path: '', redirectTo: '/momories', pathMatch: 'full' },
  {
    path: 'memories',
    component: MemoriesComponent,
    children: [
      { path: 'new', component: MemoriesEditComponent },
      { path: ':id', component: MemoriesDetailComponent },
      { path: ':id/edit', component: MemoriesEditComponent },
    ],
  },
  { path: 'messages', component: PeopleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
