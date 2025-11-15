import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  imports: [CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {

  clients = [
    { name: 'Del Monte', logo: 'assets/del-monte.png', url:'https://www.delmontefoods.in' },
    { name: 'DS Group', logo: 'assets/ds-group.png', url:'https://www.dsgroup.com' },
    { name: 'Unilever', logo: 'assets/unilever.png', url:'https://www.unilever.com' },
    { name: 'Foods & Inns', logo: 'assets/foodsandinns.png', url:'https://www.foodsandinns.com' },
    { name: 'Ayur Herbals', logo: 'assets/ayurherbals.png', url:'https://ayurherbals.co' },
    { name: "Nilon's", logo: 'assets/nilons.png' , url:'https://www.nilons.com' },
    { name: 'Kiz Foods', logo: 'assets/kizfoods.jpg', url:'https://kizfoods.com/web/index.html' },
    { name: "Mother's Recipe", logo: 'assets/mothersrecipe.png', url:'https://www.mothersrecipe.com' },
    { name: 'Amway', logo: 'assets/amway.png', url:'https://www.amway.in' },
    { name: 'County Vide', logo: 'assets/countyvide.png', url:'https://www.countyvide.com' },
    { name: 'Butterfly Ayurveda', logo: 'assets/butterflyayurveda.png', url:'https://butterflyayurveda.com/' },
    { name: 'DS Canned Foods', logo: 'assets/dscfoods.png', url:'https://dscfoods.in' },
    { name: 'ELMAC', logo: 'assets/ELMAC.png', url:'#' },
    { name: 'CavinKare', logo: 'assets/cavinkare.png', url:'https://cavinkare.com' },
    { name: 'Kissan', logo: 'assets/kissan.png', url:'https://www.kissan.in/home.html' },
  ];
}
