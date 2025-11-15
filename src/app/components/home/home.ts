import { Component } from '@angular/core';
import { Client } from '../client/client';

@Component({
  selector: 'app-home',
  imports: [Client],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
