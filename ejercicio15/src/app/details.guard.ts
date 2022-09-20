import { Injectable } from "@angular/core";
import {
	ActivatedRoute,
	ActivatedRouteSnapshot,
	CanActivate,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { EventsService } from "./events.service";

@Injectable({
	providedIn: "root",
})
export class DetailsGuard implements CanActivate {
	constructor(private eventService: EventsService) {}

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
