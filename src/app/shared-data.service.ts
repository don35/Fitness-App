import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  public person: any = [
    {
      userid: 'W18001',
      fname: 'Joel Chavez',
      emailadd: 'joelchavez@gmail.com',
      password: 'luka',
      pnumber: '09198002123',
    },
    {
      userid: 'W18002',
      fname: 'Bulado Chavez',
      emailadd: 'buladochavez@gmail.com',
      password: '12345',
      pnumber: '09457529218',
    },
    {
      userid: 'W18003',
      fname: 'Juan Chavez',
      emailadd: 'juanchavez@gmail.com',
      password: 'david',
      pnumber: '09123456789',
    },
    {
      userid: 'W1804',
      fname: 'Tanggol Chavez',
      emailadd: 'tanggolchavez@gmail.com',
      password: 'lumpia',
      pnumber: '09987654321',
    },
    {
      userid: 'W18005',
      fname: 'Babygiant Chavez',
      emailadd: 'babygiantchavez@gmail.com',
      password: '9876543',
      pnumber: '09644017331',
    },
  ];

  public errorMessage: string = '';
  public whoIsLoggedin: string = '';
  constructor() {}

  login(emailadd: string, password: string) {
    for (let i = 0; i < this.person.length; i++) {
      if (
        emailadd == this.person[i].emailadd ||
        emailadd == this.person[i].pnumber
      ) {
        if (password == this.person[i].password) {
          console.log(
            this.person[i].emailadd,
            emailadd,
            password,
            this.person[i].password
          );
          this.errorMessage = '';
          localStorage.setItem('userID', this.person[i].userid);
        } else {
          this.errorMessage = 'Incorrect Username or Password';
        }
      } else {
        this.errorMessage = 'Incorrect Username or Password';
      }
    }
  }

  signup(
    fullName: string,
    phoneNumber: string,
    emailAddress: string,
    password: string
  ) {
    let userID = 'W' + Math.floor(Math.random() * 999999 + 10000).toString();
    let new_account = {
      userid: userID,
      fname: fullName,
      emailadd: emailAddress,
      password: password,
      pnumber: phoneNumber,
    };
    this.person.push(new_account);
  }
}
