import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Event, EventsService } from "../events.service";

@Component({
	selector: "app-event-details",
	templateUrl: "./event-details.component.html",
	styleUrls: ["./event-details.component.css"],
})
export class EventDetailsComponent implements OnInit {
	public event!: Event | undefined;
	constructor(
		private eventService: EventsService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		const snapshot = this.route.snapshot;
		const paramId = snapshot.paramMap.get("id");
		this.event = this.eventService.findEvento(paramId!);
	}
	returnToEvents(): void {
		this.router.navigateByUrl("/events");
	}
}
