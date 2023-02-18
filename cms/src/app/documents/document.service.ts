import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  selectedDocumentEvent = new EventEmitter<Document>();
  documentListChangedEvent = new Subject<Document[]>();

  private documents: Document[] = [];
  private maxDocId: number;
  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocId = this.getMaxId();
  }


  getDocuments(): Document[] {
    return this.documents.slice();
  }

   getDocument(id: string): Document {
    for (const document of this.documents){
      if(document.id == id){
        return document;
      }
    }
    return null!
  }

  deleteDocument(document: Document) {
    if (!document) return;
    const pos = this.documents.indexOf(document);
    if (pos < 0) return;
    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  getMaxId(): number {
    let maxIdNumber = 0;
    this.documents.forEach((document) => {
      if (+document.id > maxIdNumber) maxIdNumber = +document.id;
    });
    return maxIdNumber;
  }

  addDocument(newDoc: Document) {
    if (newDoc === null || newDoc === undefined) return;
    this.maxDocId++;
    newDoc.id = `${this.maxDocId}`;
    this.documents.push(newDoc);
    this.documentListChangedEvent.next(this.documents.slice());
  }

  updateDocument(original: Document, newDoc: Document) {
    if (
      newDoc === null ||
      newDoc === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.documents.indexOf(original);
    if (pos < 0) return;

    newDoc.id = original.id;
    this.documents[pos] = newDoc;
    this.documentListChangedEvent.next(this.documents.slice());
  }
}
