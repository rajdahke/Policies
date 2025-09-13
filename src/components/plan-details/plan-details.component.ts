import { Component, EventEmitter, Output } from '@angular/core';
interface Plan {
  years: number;
  amount: number;
  total: number;
  savingsLakhs?: number;
}

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent {

  @Output() viewDetails: EventEmitter<boolean> = new EventEmitter<boolean>()
  user = {
    name: 'Claudius C.',
    ageGender: '35 M',
    tags: ['Life shield', 'Lump sum payout', 'Covered Till 75', 'Graduate and above', 'Salaried', '10 LPA']
  };
  policyTerm = 40;
  age = 75;
  coverAmount = 10000000;
  presetAmounts = [2500000, 5000000, 7500000, 10000000, 50000000];
  selectedPlanIndex: any = 1;
  selectedPlanIndexItem: any = null;

  riders = [
    {
      name: 'Accidental permanent total/partial disability',
      price: 249,
      icon: '../../assets/icons/while.svg',
      added: false
    },
    {
      name: 'New critical illness',
      price: 249,
      icon: '../../assets/icons/bed.svg',
      added: false
    },
    {
      name: 'Accidental death',
      price: 249,
      icon: '../../assets/icons/bike.svg',
      added: false
    }
  ];



  plans: Plan[] = [
    { years: 5, amount: 62124, total: 466340, savingsLakhs: 3.66 },
    { years: 10, amount: 46768, total: 498110, savingsLakhs: 3.14 },
    { years: 15, amount: 33894, total: 508340, savingsLakhs: 2.85 },
    { years: 20, amount: 27984, total: 543670, savingsLakhs: 2.29 },
    { years: 25, amount: 23971, total: 576340, savingsLakhs: 1.91 },
    { years: 30, amount: 16074, total: 643340  }
  ];

  discounts: string[] = ['Partner: 5%', 'Worksite markup: 5%'];

  formatINR(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }

  increaseCover() {
    this.coverAmount += 500000;
  }

  decreaseCover() {
    if (this.coverAmount > 500000) {
      this.coverAmount -= 500000;
    }
  }

  setCover(amount: number) {
    this.coverAmount = amount;
  }

  toggleRider(rider: any) {
    rider.added = !rider.added;
  }


  selectPlan(index: number) {
    this.selectedPlanIndex = index;
    this.selectedPlanIndexItem = null
  }
  selectPlanitem(index: number) {
    this.selectedPlanIndexItem = index;
    this.selectedPlanIndex = null
  }

  back() {
    this.viewDetails.emit()
  }
}