import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: any;
  email: any;
  message: any;
  reset(){
    this.name="",
    this.email=""
    this.message=""
  }
  send() {    
    const params = {    
    from_name: this.name,
    from_email: this.email,
    message: this.message,
  };

  emailjs.send(
    'service_2aqbxgk',
    'template_42j9ioe',
    params,
    '9EYLUT9xGYDE8bzxB'
  )
  .then(() => alert("Email Sent!"))
  .catch(err => console.error(err));
  this.reset();
}

}
