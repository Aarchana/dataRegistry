import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Grid } from '../grid';
import { Observable } from 'rxjs';

@Injectable({providedIn: "root"})
export class GridService {

    constructor(private httpClient: HttpClient, @Inject('BACKEND_API_URL') private apiUrl: string)  { }

    public getList(params: HttpParams): Observable<Grid> {
       return this.httpClient.get<Grid>('/inwardregisters', {params});
    }

    public deleteRecord(id) {
        return this.httpClient.delete('/inwardregisters/'+id, {responseType: 'text'});
    }

    public updateRecord(id, updatedGridRecord: Grid) {
        return this.httpClient.put('/inwardregisters/'+id, updatedGridRecord, {responseType: 'text'})
    }

    public getDetails(id): Observable<Grid> {
        return this.httpClient.get<Grid>('/inwardregisters/'+id)
    }

    public gridAdd(gridRecord: Grid){
        return this.httpClient.post(this.apiUrl +'/inwardregisters', gridRecord);
    }

}