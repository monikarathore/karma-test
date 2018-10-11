import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WkeDocumentViewComponent } from './wke-document-view/wke-document-view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [WkeDocumentViewComponent],
    exports: [],
    providers: []
})
export class WkeDocumentModule { }