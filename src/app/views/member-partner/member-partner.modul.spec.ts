import { MemberPartnerModule } from "./member-partner.module";

describe("MemberPartnerModule", () => {
  let dataTablesModule: MemberPartnerModule;

  beforeEach(() => {
    dataTablesModule = new MemberPartnerModule();
  });

  it("should create an instance", () => {
    expect(dataTablesModule).toBeTruthy();
  });
});
