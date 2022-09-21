import { Injectable } from "@angular/core";
import {
	ActivatedRoute,
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsService } from "./events.service";

@Injectable({
	providedIn: "root",
})
export class DetailsGuard
	implements CanActivate, CanDeactivate<EventDetailsComponent>
{
	constructor(private eventService: EventsService) {}

	canDeactivate(
		component: EventDetailsComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot | undefined
	):
		| boolean
		| UrlTree
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree> {
		return component.reviewed;
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		const paramID = route.paramMap.get("id");
		if (!paramID) {
			return false;
		}
		return !!this.eventService.findEvento(paramID);
	}
}
