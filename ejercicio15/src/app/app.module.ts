import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { RouterModule, Routes } from "@angular/router";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { DetailsGuard } from "./details.guard";

const appRoutes: Routes = [
	{ path: "events", component: EventsListComponent },
	{
		path: "details/:id",
		component: EventDetailsComponent,
		canActivate: [DetailsGuard],
	},
	{ path: " ", pathMatch: "full", component: AppComponent },
];

@NgModule({
	declarations: [AppComponent, EventsListComponent, EventDetailsComponent],
	imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
	providers: [DetailsGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
