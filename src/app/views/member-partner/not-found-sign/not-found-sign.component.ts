import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-not-found-sign',
  templateUrl: './not-found-sign.component.html',
  styleUrls: ['./not-found-sign.component.scss']
})
export class NotFoundSignComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl(
      "/member-partner"
    );
  }

}
