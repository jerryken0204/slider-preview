import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { slider } from '../slider';
import Swiper from 'swiper';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'slider-preview',
  templateUrl: './slider-preview.component.html',
  styleUrls: ['./slider-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderPreviewComponent implements OnInit {
  public slider = null;
  private testSwiper: Swiper;
  @Input() id = 0;
  
  
  constructor( private http: HttpClient ) {}

  ngOnInit() {
    this.slider=slider;
    // this.http
    //         .get('http://54.254.159.186:5000/api/v1/component?id=' + this.id)
    //         .subscribe((data: any) => {
    //           this.slider = data.todos;
    //           document.onreadystatechange=function() { 
    //             if(this.readyState=="complete") { 
    //               new Swiper('.swiper-container', {
    //                 direction: 'horizontal',
    //                 loop: true,
    //                 navigation: {
    //                   nextEl: '.swiper-button-next',
    //                   prevEl: '.swiper-button-prev',

    //                 },
    //                 scrollbar: {
    //                   el: '.swiper-scrollbar',
    //                 },
    //                 on: {

    //                 }
    //               });
    //             }
    //           }
    //         });
  }

  ngAfterViewInit() {
      this.testSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      watchSlidesProgress: true,
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
       
      }
    });
  }
 
}
