import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  createAccount(values):Promise<any> {
    return this.http.post('https://fsd2020-2.herokuapp.com/api/register', values).toPromise()
  }

  getHosts() {
    return this.http.get<any>('https://fsd2020-2.herokuapp.com/api/rooms').toPromise()
    .then(data => {
      let array = []
      for (let i in data['rooms']) {
        array.push(data['rooms'][i])
      }
      return array 
    })
  }

  updateName(payload):Promise<any> {
    const formData:FormData = new FormData()
    formData.set('payload', JSON.stringify(payload))
    formData.set('image_file', (<HTMLInputElement>document.getElementById("image_file")).files[0])
    return this.http.post('https://fsd2020-2.herokuapp.com/api/update', formData)
    .pipe(take(1)).toPromise()
      .then ((result) => {
        // console.info(result)
        return result
      })
      .catch ((e) => {
        console.error("Error : ", e)
      })
  }

  resetPassword(payload):Promise<boolean> {
    console.info(payload)
    return this.http.post('https://fsd2020-2.herokuapp.com/api/reset', payload, {observe:'response'}).toPromise()
    .then (resp => {
      return (resp.status == 200)
    })
  }

  updatePassword(payload) {
    console.info(payload)
    return this.http.post('https://fsd2020-2.herokuapp.com/api/updatepassword', payload, {observe:'response'}).toPromise()
    .then (resp => {
      return (resp.status == 200)
    })
  }
}
