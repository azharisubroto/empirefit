import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PositionService } from "src/app/shared/services/position.service";
import { BranchService } from "src/app/shared/services/branch.service";
import { StaffService } from "src/app/shared/services/staff.service";
import { BankService } from "src/app/shared/services/bank.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
import { ToastrService } from "ngx-toastr";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-wizard",
  templateUrl: "./staff-form.component.html",
  styleUrls: ["./staff-form.component.css"]
})
export class StaffFormComponent implements OnInit {
  isCompleted: boolean;
  staffForm: FormGroup;
  positions;
  staff;
  id_staff;
  branches;
  getpositions;
  banks;

  constructor(
    private fb: FormBuilder,
    private positionService: PositionService,
    private router: Router,
    private branchService: BranchService,
    private staffService: StaffService,
    private bankService: BankService,
    private toastr: ToastrService,
    private parserFormatter: NgbDateParserFormatter,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.staffForm = this.fb.group({
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

    this.bankService.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
    });

    this.staffService
      .showStaff(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.getpositions = data["data"].positions;

        $.each(this.getpositions, function(i, item) {
          $("input[name='position'][value=" + item.position_id + "]").prop(
            "checked",
            true
          );
        });
        this.staffForm.setValue({
          name: data["data"].name,
          email: data["data"].email,
          phone: data["data"].phone,
          id_card: data["data"].id_card,
          date_of_birth: data["data"].date_of_birth,
          account_number: data["data"].account_number,
          branch_id: data["data"].branch_id,
          bank_id: data["data"].bank_id,
          address: data["data"].address
        });

        $("#staff-name").text(data["data"].name);
        $("#staff-status").text(data["data"].status);
      });

    this.branchService.getBranches().subscribe((data: any) => {
      this.branches = data["data"];
    });
  }

  onStep1Next(e) {
    if (this.staffForm.invalid) {
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

      let name = this.staffForm.controls["name"].value;
      let email = this.staffForm.controls["email"].value;
      let phone = this.staffForm.controls["phone"].value;
      let id_card = this.staffForm.controls["id_card"].value;
      let date_of_birth = this.staffForm.controls["date_of_birth"].value;
      let account_number = this.staffForm.controls["account_number"].value;
      let branch_id = this.staffForm.controls["branch_id"].value;
      let bank_id = this.staffForm.controls["bank_id"].value;
      let address = this.staffForm.controls["address"].value;
      let formValues = this.staffForm.value;

      formValues["date_of_birth"] = date_of_birth;
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

      this.staffService
        .updateStaff(this.activatedRoute.snapshot.params["id"], formValues)
        .subscribe((data: any) => {
          if (data["status"] === "200") {
            this.toastr.success(data["message"], "Success!", {
              progressBar: true
            });
          }
        });
    }
  }
  onComplete(e) {
    this.router.navigateByUrl("staff");
  }
}
