import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PositionService } from "src/app/shared/services/position.service";
import { BranchService } from "src/app/shared/services/branch.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { BankService } from "src/app/shared/services/bank.service";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { ToastrService } from "ngx-toastr";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-wizard",
  templateUrl: "./staff-registration.component.html",
  styleUrls: ["./staff-registration.component.css"]
})
export class StaffRegistrationComponent implements OnInit {
  isCompleted: boolean;
  staffRegistrationForm: FormGroup;
  positions;
  staff;
  id_staff;
  branches;
  staff_name;
  staff_status;
  banks;

  constructor(
    private fb: FormBuilder,
    private positionService: PositionService,
    private router: Router,
    private branchService: BranchService,
    private staffService: StaffService,
    private bankService: BankService,
    private toastr: ToastrService,
    private parserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit() {
    this.staffRegistrationForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      phone: ["", Validators.required],
      id_card: ["", Validators.required],
      date_of_birth: ["", Validators.required],
      account_number: [""],
      branch_id: ["1"],
      bank_id: [],
      address: ["", Validators.required]
    });

    this.positionService.getPositions().subscribe((data: any) => {
      this.positions = data["data"];
    });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });

    //Checbox
    $(".selectall").click(function() {
      if ($(this).is(":checked")) {
        $('input[name="position"]').prop("checked", true);
      } else {
        $('input[name="position"]').prop("checked", false);
      }
    });
  }

  onStep1Next(e) {
    if (this.staffRegistrationForm.invalid) {
      this.toastr.error("Please complete the data", "Not Saved!", {
        progressBar: true
      });
    } else {
      let dataPositions = [];
      let dataPositionName = [];

      $.each($("input[name='position']:checked"), function() {
        dataPositions.push($(this).val());
        dataPositionName.push(
          $(this)
            .parent()
            .find(".position_name")
            .text()
        );
      });
      $(".position-final").val(dataPositions);
      $(".position-name-final").val(dataPositionName);

      let name = this.staffRegistrationForm.controls["name"].value;
      let email = this.staffRegistrationForm.controls["email"].value;
      let phone = this.staffRegistrationForm.controls["phone"].value;
      let id_card = this.staffRegistrationForm.controls["id_card"].value;
      let date_of_birth = this.staffRegistrationForm.controls["date_of_birth"]
        .value;
      let account_number = this.staffRegistrationForm.controls["account_number"]
        .value;
      let branch_id = this.staffRegistrationForm.controls["branch_id"].value;
      let bank_id = this.staffRegistrationForm.controls["bank_id"].value;
      let address = this.staffRegistrationForm.controls["address"].value;
      let formValues = this.staffRegistrationForm.value;

      formValues["date_of_birth"] = this.parserFormatter.format(date_of_birth);
      formValues["name"] = name;
      formValues["email"] = email;
      formValues["phone"] = phone;
      formValues["id_card"] = id_card;
      formValues["account_number"] = account_number;
      formValues["branch_id"] = branch_id;
      formValues["bank_id"] = bank_id;
      formValues["address"] = address;
      formValues["positions"] = dataPositions;
      formValues["position_name"] = dataPositionName;

      this.staffService.createStaff(formValues).subscribe((data: any) => {
        if (data["status"] === "200") {
          this.toastr.success(data["message"], "Success!", {
            progressBar: true
          });

          $("#staff_name").text(data["data"].name);
          $("#staff_status").text(data["data"].status);
        }
      });
    }
  }
  onComplete(e) {
    this.router.navigateByUrl("staff");
  }
}
