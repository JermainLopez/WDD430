import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CeremonyComponent } from './ceremony/ceremony.component';
import { CeremonyDetailComponent } from './ceremony/ceremony-detail/ceremony-detail.component';
import { CeremonyEditComponent } from './ceremony/ceremony-edit/ceremony-edit.component';
import { CeremonyItemComponent } from './ceremony/ceremony-item/ceremony-item.component';
import { CeremonyListComponent } from './ceremony/ceremony-list/ceremony-list.component';


/* import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import {MessageComponent} from './message/message.component'; */
const appRoutes: Routes = [
  { path: '', redirectTo: '/ceremonies', pathMatch: 'full' },
  {
    path: 'ceremonies',
    component: CeremonyComponent,
    children: [
      { path: 'new', component: CeremonyEditComponent },
      { path: ':id', component: CeremonyDetailComponent },
      { path: ':id/edit', component: CeremonyEditComponent },
    ],
  },
  /* { path: 'messages', component: MessageComponent},
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      { path: 'new', component: ContactEditComponent },
      { path: ':id', component: ContactDetailComponent },
      { path: ':id/edit', component: ContactEditComponent },
    ],
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
