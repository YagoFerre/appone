import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RespostaModule } from './resposta/resposta.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RespostaModule
    ]
})
export class AppModule { }
