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
    if (this.URL.length < 43) {
      if (this.URL.length == 11) {
        window.open("https://i.ytimg.com/vi/" + this.URL + "/maxresdefault.jpg", "_blank");
        this.URL = ""
      }
      if (this.URL.length == 35) {
        window.open("https://i.ytimg.com/vi/" + this.URL.substr(24) + "/maxresdefault.jpg", "_blank");
        this.URL = ""
      }
      else {
        console.log("Nada acontece!")
      }
    } else {
      if (this.URL.length == 50) {
        window.open("https://i.ytimg.com/vi/" + this.URL.substring(32, 43) + "/maxresdefault.jpg", "_blank");
        this.URL = ""
      } else {
        window.open("https://i.ytimg.com/vi/" + this.URL.substr(32) + "/maxresdefault.jpg", "_blank");
        this.URL = ""
      }
    }
  }

  OpenLink() {
    window.open("https://github.com/maxpaz/GetYoutubeThumbnail", "_blank");
  }

}
