import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule, TabViewModule } from 'primeng/primeng';

import { PageComponent } from './page/page.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        PageComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InputTextModule,
        ButtonModule,
        TabViewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
