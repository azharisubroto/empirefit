import { ScheduleModule } from "./schedule.module";

describe("ScheduleModule", () => {
  let dataTablesModule: ScheduleModule;

  beforeEach(() => {
    dataTablesModule = new ScheduleModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
