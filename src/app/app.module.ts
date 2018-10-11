import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WkeDocumentViewComponent } from '../lib/src/wke-document-view/wke-document-view.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WkeDocumentViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
