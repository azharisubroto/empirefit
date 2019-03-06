import { StaffModule } from "./staff.module";

describe("StaffModule", () => {
  let dataTablesModule: StaffModule;

  beforeEach(() => {
    dataTablesModule = new StaffModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
