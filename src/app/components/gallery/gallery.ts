import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  images = [
    { src: 'assets/img1.png', title: 'Image One' },
    { src: 'assets/img2.png', title: 'Image Two' },
    { src: 'assets/img3.png', title: 'Image Three' },
    { src: 'assets/img4.png', title: 'Image Four' },
    { src: 'assets/img5.png', title: 'Image Five' },
    { src: 'assets/img6.png', title: 'Image Six' }
  ];

  selectedImage: any = null;

  open(img: any) {
    this.selectedImage = img;
  }

  close() {
    this.selectedImage = null;
  }

}
