import { Injectable } from "@angular/core";
import { IEvent } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class EventService {
  events: IEvent[] = [
    {
      _id: "1",
      addressEvent: "Lowokwaru, Malang",
      category: {
        _id: "1",
        name: "wedding",
        color: "#F368E0"
      },
      client: "nama klien",
      phone: "085123456789",
      pic: {
        _id: "1",
        address: "Lowokwaru, Malang",
        name: "Robertus Wanda",
        phone: "081987654321",
        position: 1,
        username: "robertuswanda"
      },
      isFinished: true,
      createdAt: new Date()
    },
    {
      _id: "2",
      addressEvent: "Lowokwaru, Malang",
      category: {
        _id: "2",
        name: "gathering",
        color: "#54A0FF"
      },
      client: "nama klien",
      phone: "085123456789",
      pic: {
        _id: "1",
        address: "Lowokwaru, Malang",
        name: "Robertus Wanda",
        phone: "081987654321",
        position: 1,
        username: "robertuswanda"
      },
      isFinished: false,
      createdAt: new Date()
    },
    {
      _id: "3",
      addressEvent: "Lowokwaru, Malang",
      category: {
        _id: "1",
        name: "wedding",
        color: "#F368E0"
      },
      client: "nama klien",
      phone: "085123456789",
      pic: {
        _id: "1",
        address: "Lowokwaru, Malang",
        name: "Robertus Wanda",
        phone: "081987654321",
        position: 1,
        username: "robertuswanda"
      },
      isFinished: false,
      createdAt: new Date()
    }
  ];
  constructor() {}

  public getEvents(): IEvent[] {
    return this.events;
  }
}
