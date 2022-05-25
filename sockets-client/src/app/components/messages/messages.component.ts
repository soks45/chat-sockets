import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  message: string = '';
  messages: string[] = [];

  constructor(private messenger: MessengerService) {
    this.messenger.messages$.subscribe(res => {
      this.messages = res;
    });
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messenger.sendMessage(this.message);
  }
}
