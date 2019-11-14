import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeserviceService {
  playlist = [
    {id: '8CdcCD5V-d8', song: 'Eminem - Venom'},
    {id: '4NJlUribp3c', song: 'Desiigner - Panda'},
    {id: '7wtfhZwyrcc', song: 'Imagine Dragons - Believer'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'cHHLHGNpCSA', song: 'Avicii - Waiting For Love'}
  ];

  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
