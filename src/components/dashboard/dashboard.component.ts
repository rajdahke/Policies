import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  viewDetails: boolean = false
  quotes = [{ name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" }, { name: 'Vidisha A.', number: "997166618" },]

  viewDetail() {
    this.viewDetails = !this.viewDetails
  }

}
