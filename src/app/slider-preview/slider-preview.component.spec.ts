import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { SliderPreviewComponent } from './slider-preview.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as _ from 'lodash';

let slider = {"success":"true","message":"components retrieved successfully","todos":{"meta_data":
{"layout":"slider-preview","class":[""],"style":""},
"children":[{"text_1":"ENDLESS CUSTOMIZATIONS FOR COMBAT",
"long_text_1":"The Razer Panthera Evo has a clear top panel with endless customization options, with access to interchangeable artwork and parts. Download the template below to create your own customized designs so everyone knows who you are when you show up for battle.\n \n [Download skin template >](https://assets2.razerzone.com/images/panthera-evo/downloads/panthera-evo-template.zip)","icons":[{"url":"","title":"[Dowload this design >](https://assets2.razerzone.com/images/panthera-evo/downloads/Azure.pdf)","text_1":"","text_2":"","description":"","image":"https://assets2.razerzone.com/images/panthera-evo/carousel/carousel-01-update.png","target":"_self"},{"url":"","title":"[Dowload this design >](https://assets2.razerzone.com/images/panthera-evo/downloads/Envy.pdf)","text_1":"","text_2":"","description":"","image":"https://assets2.razerzone.com/images/panthera-evo/carousel/carousel-02.png","target":"_self"},{"url":"","title":"[Dowload this design >](https://assets2.razerzone.com/images/panthera-evo/downloads/Prism.pdf)","text_1":"","text_2":"","description":"","image":"https://assets2.razerzone.com/images/panthera-evo/carousel/carousel-03.png","target":"_self"}],"links":[{}],"meta_data":{"text_content_render":{"style":{"max-width":"980px","margin":"0 auto","text-align":"center"}},"text_1_render":{"style":{"color":"white"}},"long_text_1_render":{"style":{"color":"#888"}},"links_class":[""],"image_render":{}}}]}};

describe('SliderPreviewComponent', () => {
let element;
let component: SliderPreviewComponent;
let fixture: ComponentFixture<SliderPreviewComponent>;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ SliderPreviewComponent ],
    imports: [HttpClientModule,HttpClientTestingModule]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(SliderPreviewComponent);
  component = fixture.componentInstance;
  element = fixture.debugElement.nativeElement;
  component.slider = _.cloneDeep(slider.todos);
  console.log(component.slider.children[0].text_1='');
  fixture.detectChanges();
});
afterEach(() => {
 TestBed.resetTestingModule();
 fixture.destroy();
 element.remove();
});


it('should create slide preview component', () => {
  expect(component).toBeTruthy();
});

it('should check if there is an H2 with color white', () => {
  component.slider = _.cloneDeep(slider.todos);
  const colorOrigin ='rgb(255, 255, 255)';
  let field: HTMLInputElement = fixture.debugElement.query(By.css('h2')).nativeElement;
  expect(field.style.color).toEqual(colorOrigin);
});

it('the `h2` color of the component can be changed to `red` with meta', () => {
  const color ='red';
  component.slider.children[0].meta_data.text_1_render.style={"color":"red"};
  fixture.detectChanges();
  let field: HTMLInputElement = fixture.debugElement.query(By.css('h2')).nativeElement;
  expect(field.style.color).toEqual(color);
});

it('should check if there is no H2 when the text_1 is empty', () => {
 expect(fixture.debugElement.query(By.css('h2'))).toBeTruthy();
 component.slider.children[0].text_1='';
 fixture.detectChanges();
 expect(fixture.debugElement.query(By.css('h2'))).toBeNull();
});

//  it('the background color of the component can be changed to `red` with meta', () => {
//   expect(component).toBeFalsy();
// });

// it('should check if there is no P when the long_text_1 is empty', () => {
//   expect(fixture.debugElement.query(By.css('.test1'))).toBeTruthy();
//   component.slider.children[0].long_text_1='';
//   fixture.detectChanges();
//   expect(fixture.debugElement.query(By.css('.test1'))).toBeNull();
// });

// it('the `p` color of the component can be changed to `red` with meta', () => {
//   const color ='red';
//   component.slider.children[0].meta_data.long_text_1_render.style={"color":"red"};
//   fixture.detectChanges();
//   let field: HTMLInputElement = fixture.debugElement.query(By.css('.test1')).nativeElement;
//   expect(field.style.color).toEqual(color);
// });

//  it('should check if there is an `a` tag and it has a target of `_self`', () => {
//    let field : HTMLInputElement = fixture.debugElement.query(By.css('#slider a')).nativeElement;
//    expect(field.getAttribute('target')).toEqual('_self');
//  });

//  it(`should have initialized a slider`, async(inject([HttpClient, HttpTestingController],
//    (http: HttpClient, backend: HttpTestingController) => {
//      http.get('http://54.254.159.186:5000/api/v1/component?id=53').subscribe((next) => {
//        expect(next).toEqual({slider:'hello'}, 'expected slider');
//      });
//      backend.expectOne({url:'http://54.254.159.186:5000/api/v1/component?id=53',method:'GET'});
//      backend.verify();
//  })));

//  it('click on next will switch the image to the next image', () => {
//    expect(component).toBeFalsy();
//  });


//  it('the slider p tag is generated for an image when the `title` is filled', () => {
//   expect(fixture.debugElement.queryAll(By.css('#slider-carousel p'))).toBeTruthy();
//  });

//  it('the slider p tag is not present for an image when the `title` is empty', () => {
//   expect(fixture.debugElement.queryAll(By.css('#slider-carousel p'))).toBeTruthy();
//   component.slider.children[0].icons[0].title='';
//   fixture.detectChanges();
//   expect(fixture.debugElement.queryAll(By.css('#slider-carousel p')).length).toEqual(2);
// });
});




