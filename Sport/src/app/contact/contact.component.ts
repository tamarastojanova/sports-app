import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSubmit=true;
  submitMessage='';
  private myForm: AngularFirestoreCollection<any>;
  constructor(private formBuilder:FormBuilder, private firestore: AngularFirestore) {

   }

  ngOnInit(): void {
    this.myForm=this.firestore.collection('enquiry');
    this.contactForm=this.formBuilder.group(
      {
        name:[null, Validators.required],
        email:[null, [Validators.required, Validators.email]],
        message:[null, Validators.required],
      }
    )
  }
  submitData(value:any){
    //console.log(value);
    this.myForm.add(value)
    .then(res=>{
       this.submitMessage='Submitted successfully!';
    })
    .catch(err=>{
      console.log(err);
    })
    this.isSubmit= true;
   
    setTimeout(()=>{
      this.isSubmit=false;
    },5000)
  }
}
