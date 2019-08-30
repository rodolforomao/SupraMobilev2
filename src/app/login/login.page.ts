import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from  '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  httpClient : HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const url = 'http://10.100.13.43/geral/getcontratos_ws';
      const params = {};
      //const headers = {};
      let headers: HttpHeaders = new HttpHeaders();
      headers =  headers.append("Access-Control-Allow-Origin", "192.168.0.1:8102");
      // headers =  headers.append("Access-Control-Allow-Credentials", "true");
      //headers =  headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
      // headers =  headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
      headers =  headers.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic3VwcmFfYXBwQHN1cHJhLmNvbSIsInBhc3MiOiIxMjM0NTYiLCJjb250cmF0byI6bnVsbCwicGVyaW9kb19yZWZlcmVuY2lhIjoiMjAxOS0wOC0wMSJ9.34YluiRUB2EfLhE5WI8k8fa0wM44jp3HNozN9jVk_ow")
      //headers = headers.append('Content-Type', 'application/json');
      //headers = headers.append('Type', 'No Auth');
      //headers = headers.append('x-corralation-id', '12345');
     console.log(headers);
     const response = await this.httpClient.get(url,{headers:headers});
     console.log("RODOLFO");
     //console.log(response);
     response.subscribe((res)=>{
        console.log(res);
      });
     console.log("RODOLFO--");

      // console.log(response.subscribe(data => {
      //   console.log(data['_body']);
      //  }, error => {
      //   console.log(error);
      // }));
     

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }

 public getUsers() {



  

 
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    id: '105',
    user_id: '90'
  });


  this.httpClient.get("http://supra.dnit.gov.br/geral/getcontratos_ws")
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });



  }
}
