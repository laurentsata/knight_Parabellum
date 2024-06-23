import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.scss'],
})
export class ArmoryComponent implements OnInit {
  isOnline: boolean = true;

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.networkService.isOnline$.subscribe((online) => {
      this.isOnline = online;
    });
  }
}
