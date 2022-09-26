import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { EventsListComponent } from "./events-list/events-list.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { PrintErrorComponent } from './print-error/print-error.component';

@NgModule({
	declarations: [AppComponent, EventsListComponent, CreateEventComponent, PrintErrorComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
