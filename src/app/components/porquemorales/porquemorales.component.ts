import { Component,AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';


@Component({
  selector: 'app-porquemorales',
  templateUrl: './porquemorales.component.html',
  styleUrls: ['./porquemorales.component.css']
})
export class PorquemoralesComponent implements AfterViewInit {

  id: string | null;

  constructor(private arouter:ActivatedRoute){
    this.id = this.arouter.snapshot.paramMap.get('id');
  }
  ngAfterViewInit(): void {

    var swiper =new Swiper('.mySwiper-1', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
    });
  }
}