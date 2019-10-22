import { Injectable } from "@angular/core";
import { IEvent, IEmployee, IVendor, IAssignment } from "../interfaces";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

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

  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`${this.apiUrl}/event`);
  }

  public showEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${this.apiUrl}/event/${id}`);
  }

  public addEvent(event: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(
      `${this.apiUrl}/event`,
      event,
      this.httpOptions
    );
  }

  public updateEvent(id: string, data: any): Observable<IEvent> {
    return this.http.put<IEvent>(
      `${this.apiUrl}/event/${id}`,
      data,
      this.httpOptions
    );
  }

  public deleteEvent(id: string): Observable<IEmployee> {
    return this.http.delete<IEmployee>(
      `${this.apiUrl}/event/${id}`,
      this.httpOptions
    );
  }
}
