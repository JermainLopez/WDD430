import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter();

  documents = [
    new Document('1', 'Example 1', 'Document 1.', 'My 1 Document Page in my database'),
    new Document('2', 'Example 2', 'Document 2.', 'My 2 Document Page in my database'),
    new Document('3', 'Example 3', 'Document 3.', 'My 3 Document Page in my database'),
    new Document('4', 'Example 4', 'Document 4.', 'My 4 Document Page in my database'),
    new Document('5', 'Example 5', 'Document 5.', 'My 5 Document Page in my database'),
  ];

  constructor() {}
  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
