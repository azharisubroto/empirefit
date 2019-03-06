import { MemberModule } from "./member.module";

describe("MemberModule", () => {
  let dataTablesModule: MemberModule;

  beforeEach(() => {
    dataTablesModule = new MemberModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
