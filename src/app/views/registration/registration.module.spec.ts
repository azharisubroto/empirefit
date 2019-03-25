import { RegistrationModule } from "./registration.module";

describe("RegistrationModule", () => {
  let dataTablesModule: RegistrationModule;

  beforeEach(() => {
    dataTablesModule = new RegistrationModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
