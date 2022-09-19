import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
	{ path: "events", component: EventsListComponent },
	{ path: " ", pathMatch: "full", component: AppComponent },
];

@NgModule({
	declarations: [AppComponent, EventsListComponent],
	imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
