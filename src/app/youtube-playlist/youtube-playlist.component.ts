import { Component, OnInit } from '@angular/core';
import {YoutubeserviceService} from '../youtubeservice.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(public youtubeService: YoutubeserviceService) { }

  ngOnInit() {
  }

}
