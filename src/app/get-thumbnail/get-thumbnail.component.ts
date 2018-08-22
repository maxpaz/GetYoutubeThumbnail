import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-get-thumbnail',
  templateUrl: './get-thumbnail.component.html',
  styleUrls: ['./get-thumbnail.component.css']
})
export class GetThumbnailComponent implements OnInit {

  URL: string;

  // URL de test: https://www.youtube.com/watch?v=9psJEKbqhIs

  constructor() { }

  ngOnInit() {
  }
  
  OpenJPG() {
    if(this.URL.length < 32){
      console.log("Nao passa")

    }else{
    window.open("https://i.ytimg.com/vi/" + this.URL.substr(32) + "/maxresdefault.jpg", "_blank");
    this.URL = ""
    }
  }

  OpenLink() {
    window.open("https://github.com/maxpaz/GetYoutubeThumbnail", "_blank");
  }

}