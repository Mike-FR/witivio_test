import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PumpsService } from 'src/app/services/pumps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pump',
  templateUrl: './admin-pump.component.html',
  styleUrls: ['./admin-pump.component.css']
})
export class AdminPumpComponent implements OnInit {

  beerForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: PumpsService, private router: Router) { }

  ngOnInit() {
    this.beerForm = this.fb.group({
      type: [''],
      outflow: [0],
    });
  }

  addBeer() {
    this.dataService.addBeer(this.beerForm.value).subscribe();
    this.router.navigate(['']);
  }

}
