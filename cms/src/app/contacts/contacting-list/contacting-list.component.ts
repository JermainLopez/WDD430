import { Component } from '@angular/core';
import { contactsShare } from 'src/app/share/share.model';

@Component({
  selector: 'app-contacting-list',
  templateUrl: './contacting-list.component.html',
  styleUrls: ['./contacting-list.component.css']
})
export class ContactingListComponent {
  contactingList: contactsShare [] = [
    new contactsShare('ramon', 'ramon@gmail.com'),
    new contactsShare('ramon', 'ramon@gmail.com'),
  ];
  constructor(){

  }
  ngOnInit(){

  }

}
