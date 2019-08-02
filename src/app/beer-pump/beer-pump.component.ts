import { Component, OnInit } from '@angular/core';
import { PumpsService } from '../services/pumps.service';
import { Pump } from '../models/pump';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-beer-pump',
  templateUrl: './beer-pump.component.html',
  styleUrls: ['./beer-pump.component.css']
})
export class BeerPumpComponent implements OnInit {

  pumpArray: Pump[];

  constructor(private dataService: PumpsService) { }

  ngOnInit() {
    this.dataService.getBeersPumps().subscribe(pump => {
      this.pumpArray = pump;
      console.log(this.pumpArray);
    });
  }

  updateOutflow(i) {
    this.dataService.updateOutflow(this.pumpArray[i - 1]).subscribe(beerData => beerData);
  }

  removePump(delID: number) {
    this.dataService.deletePump(delID).subscribe(() => console.log(`Pompe ${delID} supprimée`),
      (err) => console.log(err)
    );
    for (let i = 0; i < this.pumpArray.length; i++) {
      if (this.pumpArray[i].id === delID) {
        this.pumpArray.splice(i, 1);
        break;
      }
    }
  }
}
