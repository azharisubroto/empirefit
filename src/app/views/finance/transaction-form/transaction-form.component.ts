import { Component, OnInit } from "@angular/core";
import { FinanceService } from "src/app/shared/services/finance.service";
import { UserService } from "src/app/shared/services/user.service";
import { debounceTime } from "rxjs/operators";
import { Router, ActivatedRoute} from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import * as $ from "jquery";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  finance:any=[];
  edc:any;
  user:any;
  filteredProducts;
  userForm: FormGroup;

  constructor(
    private FinanceService: FinanceService,
    private UserService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    // private chRef: ChangeDetectorRef,
    // private modalService: NgbModal,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    var mod = this;
    this.userForm = this.fb.group({
      finance_status: ["", Validators.required],
      finance_notes: ["", Validators.required],
      bank_notes: ["", Validators.required],
      bank_withdrawal: ["", Validators.required],
      bank_approval_code: ["", Validators.required],
    });
    
    this.FinanceService.getSingleAutoDebit( this.activatedRoute.snapshot.params["id"] ).subscribe((data: any[]) => {
      var res = data['data'];
      this.finance = res;
      this.edc = data['edc'];
      console.log(this.finance);
      this.userForm.setValue({
        finance_status: this.finance.finance_status,
        finance_notes: this.finance.finance_notes,
        bank_notes: this.finance.bank_notes,
        bank_withdrawal: this.finance.bank_notes,
        bank_approval_code: this.finance.bank_approval_code
      });
    });

    // Get single User
    this.UserService.getSingleUser().subscribe((data: any) => {
      this.user = data["data"];
    });
  }

  submit() {
    $('#saving').html('Saving...');
    if (this.userForm.invalid) {
      return; 
    } else {
      this.FinanceService.updateAutodebitManual(this.activatedRoute.snapshot.params["id"], this.userForm.value).subscribe((res: any) => {
        setTimeout(() => {
          if (res["status"] === "200") {
            this.toastr.success(res["message"], "Success!", {
              progressBar: true
            });
            this.router.navigateByUrl("/finance");
          } else {
            this.toastr.error(res["message"], "Error!", {
              progressBar: true
            });
          }
        }, 3000);
      });
    }
  }

}
