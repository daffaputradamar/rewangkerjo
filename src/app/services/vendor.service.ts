import { Injectable } from "@angular/core";
import { IVendor } from "../interfaces";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class VendorService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.authService.getToken()}`
    })
  };

  public getVendors(): Observable<IVendor[]> {
    return this.http.get<IVendor[]>(`${this.apiUrl}/vendor`);
  }

  public addVendor(vendor: IVendor): Observable<IVendor> {
    return this.http.post<IVendor>(
      `${this.apiUrl}/vendor`,
      vendor,
      this.httpOptions
    );
  }

  public deleteVendor(id: string): Observable<IVendor> {
    return this.http.delete<IVendor>(
      `${this.apiUrl}/vendor/${id}`,
      this.httpOptions
    );
  }
}
