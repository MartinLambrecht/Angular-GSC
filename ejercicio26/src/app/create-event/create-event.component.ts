import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../event.service";

@Component({
	selector: "app-create-event",
	templateUrl: "./create-event.component.html",
	styleUrls: ["./create-event.component.css"],
})
export class CreateEventComponent implements OnInit {
	name: any;
	model = {
		name: "",
		date: "",
		time: "",
		location: {
			address: "",
			city: "",
			country: "",
		},
	};

	constructor(private eventService: EventService, private router: Router) {}

	ngOnInit() {}

	formSubmit() {
		this.eventService.saveEvent(this.model);
		this.router.navigate(["/events"]);
	}
	cancel() {
		this.router.navigate(["/events"]);
	}
}
