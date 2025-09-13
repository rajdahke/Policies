import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.isOpen && this.dropdownRef && !this.dropdownRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
