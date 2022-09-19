import { Component, OnInit } from "@angular/core";
import { EventsService } from "../events.service";
import {Event} from "../events.service"

@Component({
	selector: "app-events-list",
	templateUrl: "./events-list.component.html",
	styleUrls: ["./events-list.component.css"],
})
export class EventsListComponent implements OnInit {
	public events!: Event[];
	constructor(private eventsService: EventsService) {

	}
	ngOnInit() {
		this.events = this.eventsService.getEventos();
	}
}
