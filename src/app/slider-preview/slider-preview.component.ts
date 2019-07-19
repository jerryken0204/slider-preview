import { Component, OnInit } from '@angular/core';
import {slider} from '../slider';
import Swiper from 'swiper';

@Component({
  selector: 'slider-preview',
  templateUrl: './slider-preview.component.html',
  styleUrls: ['./slider-preview.component.css']
})
export class SliderPreviewComponent implements OnInit {
 
  constructor() { 

  }

  ngOnInit() {
   
  }
  
  testSwiper: Swiper;
 
  slider = slider;

  ngAfterViewInit() {
    this.testSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on:{
        
      }
    });

  }


}
