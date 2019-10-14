import { Injectable } from "@angular/core";
import { IEvent, IEmployee, IVendor, IAssignment } from "../interfaces";

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
      client: "wedding sudah",
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
      client: "gathering sudah",
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
      _id: "3",
      addressEvent: "Lowokwaru, Malang",
      category: {
        _id: "2",
        name: "gathering",
        color: "#54A0FF"
      },
      client: "gathering belum",
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
      vendors: [
        {
          _id: "1",
          name: "Vendor 1",
          phone: "085123456789"
        },
        {
          _id: "2",
          name: "Vendor 2",
          phone: "085987654321"
        }
      ],
      assignments: [
        {
          assignment: "Membuat proposal",
          isFinished: true
        },
        {
          assignment: "Membuat layout acara",
          isFinished: false
        }
      ],
      documents: [
        {
          path: "https://via.placeholder.com/300",
          deskripsi: "Layout acara"
        },
        {
          path: "https://via.placeholder.com/300",
          deskripsi: "Foto tempat"
        }
      ],
      committees: [
        {
          _id: "1",
          address: "Lowokwaru, Malang",
          name: "Robertus Wanda",
          phone: "081987654321",
          position: 1,
          username: "robertuswanda"
        },
        {
          _id: "2",
          address: "Lowokwaru, Malang",
          name: "Robertus Bertus",
          phone: "081987654321",
          position: 1,
          username: "robertuswanda"
        },
        {
          _id: "3",
          address: "Lowokwaru, Malang",
          name: "Wanda Bertus",
          phone: "081987654321",
          position: 2,
          username: "robertuswanda"
        },
        {
          _id: "4",
          address: "Lowokwaru, Malang",
          name: "Wanda Wanda",
          phone: "081987654321",
          position: 2,
          username: "robertuswanda"
        }
      ],
      createdAt: new Date()
    },
    {
      _id: "4",
      addressEvent: "Lowokwaru, Malang",
      category: {
        _id: "1",
        name: "wedding",
        color: "#F368E0"
      },
      client: "wedding belum",
      phone: "085123456789",
      pic: {
        _id: "1",
        address: "Lowokwaru, Malang",
        name: "Robertus Wanda",
        phone: "081987654321",
        position: 1,
        username: "robertuswanda"
      },
      vendors: [
        {
          _id: "1",
          name: "Vendor 1",
          phone: "085123456789"
        },
        {
          _id: "2",
          name: "Vendor 2",
          phone: "085987654321"
        }
      ],
      assignments: [
        {
          assignment: "Membuat proposal",
          isFinished: true
        },
        {
          assignment: "Membuat layout acara",
          isFinished: false
        }
      ],
      documents: [
        {
          path: "https://via.placeholder.com/300",
          deskripsi: "Layout acara"
        },
        {
          path: "https://via.placeholder.com/300",
          deskripsi: "Foto tempat"
        }
      ],
      committees: [
        {
          _id: "1",
          address: "Lowokwaru, Malang",
          name: "Robertus Wanda",
          phone: "081987654321",
          position: 1,
          username: "robertuswanda"
        },
        {
          _id: "2",
          address: "Lowokwaru, Malang",
          name: "Robertus Bertus",
          phone: "081987654321",
          position: 1,
          username: "robertuswanda"
        },
        {
          _id: "3",
          address: "Lowokwaru, Malang",
          name: "Wanda Bertus",
          phone: "081987654321",
          position: 2,
          username: "robertuswanda"
        },
        {
          _id: "4",
          address: "Lowokwaru, Malang",
          name: "Wanda Wanda",
          phone: "081987654321",
          position: 2,
          username: "robertuswanda"
        }
      ],
      isFinished: false,
      createdAt: new Date()
    }
  ];
  constructor() {}

  public getEvents(): IEvent[] {
    return this.events;
  }

  public showEvent(id: string): IEvent | null {
    let event: IEvent;
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        event = this.events[i];
        return event;
        break;
      }
    }
    return null;
  }

  public addCommittee(id: string, employee: IEmployee) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        this.events[i].committees.push(employee);
        break;
      }
    }
  }

  public addVendor(id: string, vendor: IVendor) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        this.events[i].vendors.push(vendor);
        break;
      }
    }
  }

  public addAssignment(id: string, assignment: IAssignment) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        this.events[i].assignments.push(assignment);
        break;
      }
    }
  }

  public deleteCommittee(id: string, idEmployee: string) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        for (let j = 0; j < this.events[i].committees.length; j++) {
          if (this.events[i].committees[j]._id === idEmployee) {
            this.events[i].committees.splice(j, 1);
            break;
          }
        }
        break;
      }
    }
  }

  public deleteVendor(id: string, idVendor: string) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        if (this.events[i]._id === id) {
          for (let j = 0; j < this.events[i].vendors.length; j++) {
            if (this.events[i].vendors[j]._id === idVendor) {
              this.events[i].vendors.splice(j, 1);
              break;
            }
          }
          break;
        }
      }
    }
  }

  public deleteAssignment(id: string, assignment: string) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        if (this.events[i]._id === id) {
          for (let j = 0; j < this.events[i].assignments.length; j++) {
            if (this.events[i].assignments[j].assignment === assignment) {
              this.events[i].assignments.splice(j, 1);
              break;
            }
          }
          break;
        }
      }
    }
  }

  public updateAnEvent(id: string, event: IEvent) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i]._id === id) {
        this.events[i] = event;
      }
    }
  }
}
