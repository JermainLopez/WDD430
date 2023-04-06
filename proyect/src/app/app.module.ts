import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MemoriesComponent } from './memories/memories.component';

import { CeremoniesFilterPipe } from './ceremonies/ceremonies-filter.pipe';
import { MemoriesDetailComponent } from './memories/memories-detail/memories-detail.component';
import { MemoriesEditComponent } from './memories/memories-edit/memories-edit.component';
import { MemoriesItemComponent } from './memories/memories-item/memories-item.component';
import { MemoriesListComponent } from './memories/memories-list/memories-list.component';
import { CeremoniesComponent } from './ceremonies/ceremonies.component';
import { CeremoniesEditComponent } from './ceremonies/ceremonies-edit/ceremonies-edit.component';
import { CeremoniesItemComponent } from './ceremonies/ceremonies-item/ceremonies-item.component';
import { CeremoniesListComponent } from './ceremonies/ceremonies-list/ceremonies-list.component';
import { CeremoniesDetailComponent } from './ceremonies/ceremonies-detail/ceremonies-detail.component';
import { DropdownDirective } from 'shared/dropdown.directive';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PeopleItemComponent } from './people/people-item/people-item.component';
import { PeopleEditComponent } from './people/people-edit/people-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemoriesComponent,
    DropdownDirective,
    CeremoniesFilterPipe,
    MemoriesDetailComponent,
    MemoriesEditComponent,
    MemoriesItemComponent,
    MemoriesListComponent,
    CeremoniesComponent,
    CeremoniesItemComponent,
    CeremoniesListComponent,
    CeremoniesDetailComponent,
    CeremoniesEditComponent,
    PeopleListComponent,
    PeopleItemComponent,
    PeopleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
