import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public myCounter = 0;
  public myBinhphuong = 0;
  public userName = 'khong biet';
  public name:string = "Phan Van Thanh";
  public age = 16;
  public traicay = ['tao','nho','cam'];
  public traicay1 = [{ten:'tao',gia:15,giamgia:true},{ten:'oi',gia:20,giamgia:false},{ten:'cam',gia:6,giamgia:true},{ten:'buoi',gia:8,giamgia:true}];
  public resetName(): void {
    // console.log("resetName");
    this.name = "";
    this.age = 0;
  }

  constructor(private common: CommonService){
    
  }

  public vietnamCities = [{city:"Bắc Kạn", district:["Thị xã Bắc Kạn","Huyện Ba Bể","Huyện Bạch Thông","Huyện Chợ Đồn","Huyện Chợ Mới","Huyện Na Rì","Huyện Ngân Sơn","Huyện Pác Nặm"]},
  {city:"An Giang", district:["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
  {city:"Bà Rịa - Vũng Tàu", district:["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]},
  {city:"Bạc Liêu", district:["Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"]}]

  public myDistricts:string[] = [];
  public changeCity(event:any){
    // console.log("thanh pho ", event.target.value )
    let myCity = event.target.value;
    const searchCity = this.vietnamCities.filter(data =>data.city === myCity);
    //console.log("thanh pho", searchCity);
    if (searchCity && searchCity.length > 0){
      this.myDistricts = searchCity[0].district;
      console.log(this.myDistricts);
    }
  }

  public ngOnInit():void {
    console.log("trai cay = ",this.traicay);
    this.myCounter = this.common.counter;
    this.myBinhphuong = this.common.binhphuong(this.myCounter);
    this.common.counter++;
  }

}
