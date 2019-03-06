import { FinanceModule } from "./finance.module";

describe("FinanceModule", () => {
  let dataTablesModule: FinanceModule;

  beforeEach(() => {
    dataTablesModule = new FinanceModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
