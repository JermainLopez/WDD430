import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MemoriesComponent } from './memories/memories.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { PeopleComponent } from './people/people.component';
import { CeremonyDetailComponent } from './ceremony/ceremony-detail/ceremony-detail.component';
import { CeremonyEditComponent } from './ceremony/ceremony-edit/ceremony-edit.component';
import { CeremonyItemComponent } from './ceremony/ceremony-item/ceremony-item.component';
import { CeremonyListComponent } from './ceremony/ceremony-list/ceremony-list.component';
import { CeremoniesFilterPipe } from './ceremony/ceremonies-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemoriesComponent,
    CeremonyComponent,
    PeopleComponent,
    CeremonyDetailComponent,
    CeremonyEditComponent,
    CeremonyItemComponent,
    CeremonyListComponent,
    CeremoniesFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
