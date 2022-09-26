import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { EventsListComponent } from "./events-list/events-list.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, EventsListComponent, CreateEventComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
