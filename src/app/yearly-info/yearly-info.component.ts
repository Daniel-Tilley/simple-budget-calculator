import { Component, OnInit } from '@angular/core';
import { JsonService } from '../_services/json.service';

@Component({
  selector: 'app-yearly-info',
  templateUrl: './yearly-info.component.html',
  styleUrls: ['./yearly-info.component.css']
})
export class YearlyInfoComponent implements OnInit {

  private jsonOut;

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.jsonOut = this.jsonService.getTestJson();
  }

}
