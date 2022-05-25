import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  exampleMessages: string[] = [
    'Simple chat',
    'with',
    'Angular',
    'Koa',
    'Socket.IO'
  ]
  messages$: Observable<string[]>;
  private _messages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.exampleMessages);
  constructor(private socket: Socket) {
    this.messages$ = this._messages$.asObservable();
    this.socket.on('newMessage', (res: { message: string }) => this.exampleMessages.push(res.message))
  }

  sendMessage(message: string) {
    this.socket.emit('newMessage', message)
  }
}
