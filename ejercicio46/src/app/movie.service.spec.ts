import { TestBed } from "@angular/core/testing";

import { MovieService } from "./movie.service";

describe("MovieService", () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it("should be created", () => {
		const service: MovieService = TestBed.get(MovieService);
		expect(service).toBeTruthy();
	});

	it("Should increment cast members size.", () => {
		const service: MovieService = TestBed.get(MovieService);
		const lengthBefore = service.castMembers.length;
		service.addCastMember("Test", "Test");
		const lengthAfter = service.castMembers.length;

		expect(lengthAfter).toBe(lengthBefore + 1);
	});
});
