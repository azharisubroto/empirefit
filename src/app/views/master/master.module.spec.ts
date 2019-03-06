import { MasterModule } from "./master.module";

describe("MasterModule", () => {
  let dataTablesModule: MasterModule;

  beforeEach(() => {
    dataTablesModule = new MasterModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
