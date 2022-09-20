import { TestBed } from "@angular/core/testing";

import { DetailsGuard } from "./details.guard";

describe("DetailsGuardGuard", () => {
	let guard: DetailsGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(DetailsGuard);
	});

	it("should be created", () => {
		expect(guard).toBeTruthy();
	});
});
