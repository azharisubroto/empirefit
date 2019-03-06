import { AppFormsModule } from "./forms.module";

describe("FormsModule", () => {
  let formsModule: AppFormsModule;

  beforeEach(() => {
    formsModule = new AppFormsModule();
  });

  it("should create an instance", () => {
    expect(formsModule).toBeTruthy();
  });
});
