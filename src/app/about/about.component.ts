import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public vietnamCities = [{city:"chon Tinh",district:"quan huyen"},{city:"Bắc Kạn", district:["Thị xã Bắc Kạn","Huyện Ba Bể","Huyện Bạch Thông","Huyện Chợ Đồn","Huyện Chợ Mới","Huyện Na Rì","Huyện Ngân Sơn","Huyện Pác Nặm"]},
  {city:"An Giang", district:["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
  {city:"Bà Rịa - Vũng Tàu", district:["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]},
  {city:"Bạc Liêu", district:["Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"]}]

  //public myDistricts:string[] = [];
  //public myDistricts: string[] = [];

  //public changeCity(event:any){
    //console.log("mycity ", event.target.value);
    //let myCity = event.target.value;
    //const searchDistrict = this.vietnamCities.filter(data => data.city === myCity);
    // if (searchDistrict && searchDistrict.length > 0){
    //   this.myDistricts = searchDistrict[0].district;
    //   console.log(this.myDistricts);
    // }
    //if (searchDistrict && searchDistrict.length > 0){
      //this.myDistricts = searchDistrict[0].district;
      //console.log(this.myDistricts);
   // }
  //}
  public myDistricts =[];
  public changeCity(event:any){
    // console.log("thanh pho ", event.target.value )
    let myCity = event.target.value;
    const searchCity = this.vietnamCities.filter(data =>data.city === myCity);
    console.log("thanh pho", searchCity);
    if (searchCity && searchCity.length > 0){
      //this.myDistricts = searchCity[0].district;
      console.log(this.myDistricts);
    }
  }

}
