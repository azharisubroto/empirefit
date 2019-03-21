import { Component, OnInit } from "@angular/core";
import { CustomValidators } from "ng2-validation";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MemberService } from "src/app/shared/services/member.service";
import { MemberTypeService } from "src/app/shared/services/member-type.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BankService } from "src/app/shared/services/bank.service";
import { PersonaltrainerService } from "src/app/shared/services/personaltrainer.service";

@Component({
  selector: "app-member-activation",
  templateUrl: "./member-activation.component.html",
  styleUrls: ["./member-activation.component.scss"]
})
export class MemberActivationComponent implements OnInit {
  isCompleted: boolean;
  data: any = {
    email: ""
  };
  step2Form: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
  public member: any;
  public type: any;
  expirydate: any;
  package: any;
  banks: any;
  trainers: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private memberService: MemberService,
    private MemberTypeService: MemberTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bank: BankService,
    private PersonalTrainer: PersonaltrainerService
  ) {}

  ngOnInit() {
    this.member = { make: "" };
    this.expirydate = { make: "" };
    this.radioGroup = this.fb.group({
      radio: []
    });
    this.step2Form = this.fb.group({
      experience: [2]
    });

    // get user data
    this.memberService
      .getSingleMember(this.activatedRoute.snapshot.params["id"])
      .subscribe((data: any) => {
        this.member = data["data"];
        var date = new Date(data["data"]["expairy_date"]);
        var list = date.toUTCString().split(" ");
        //results.push(list[1]+" "+list[2]);
        this.expirydate = list[1] + " " + list[2] + " " + list[3];
        console.log(this.member);
      });

    // get member type
    this.MemberTypeService.getMemberTypes().subscribe((data: any) => {
      this.type = data["data"];
      console.log(this.type);
    });

    this.bank.getBanks().subscribe((data: any) => {
      this.banks = data["data"];
      console.log(this.banks);
    });

    this.PersonalTrainer.getPersonalTrainers().subscribe((data: any) => {
      this.trainers = data["data"];
      console.log(this.trainers);
    });
  }

  onStep1Next(e) {}
  onStep2Next(e) {}
  onStep3Next(e) {}
  onStep4Next(e) {}
  onComplete(e) {}
}
