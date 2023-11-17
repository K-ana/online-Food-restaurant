import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl,NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  constructor(private fb:FormBuilder){}
  signUpForm = this.fb.group({
    firstname:['',[Validators.required, Validators.maxLength(20)]],
    lastname:['',[Validators.required, Validators.maxLength(20)]],
    email:['',[Validators.required, Validators.minLength(4),Validators.email]],

    passwords: this.fb.group({
    password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{8,}$')]],
    confirmPassword:['',[Validators.required]]
    },{
      validators: this.MatchPasswords('password', 'confirmPassword')
    }),
  
    dateOfBirth:['',[Validators.required]],
    profilePicture:['',[Validators.required]],

    address: this.fb.group({
      street:['',[Validators.required]],
      zipCode:['',[Validators.required]],
      city:['',[Validators.required]]
    }),

    interests: this.fb.array([this.fb.control('')])    
  })


get interests(){
  return this.signUpForm.controls.interests
}


  addInterest(){
    this.interests.push(this.fb.control(""))
  }
 
MatchPasswords(controlName:string, matchingControlName:string){
return (formGroup:FormGroup)=>{
  const control = formGroup.controls[controlName]
  const matchingControl = formGroup.controls[matchingControlName]

  if(matchingControl.errors && !matchingControl.errors?.['mustMatch']){
    return
  }

  if(control.value !== matchingControl.value){
    matchingControl.setErrors({mustMatch:true})
  }else{
    matchingControl.setErrors(null)
  }
}
}


get passwords(){
 return this.signUpForm.controls.passwords.controls  
}

get address(){
  return this.signUpForm.controls.address.controls
}




  onSubmit(){
    console.log(JSON.stringify(this.signUpForm.value))
  }

 




// template driven ფორმა
  // formData: iFormsObj = {
  //   firstname: '',
  //   email: '',
  //   password: '',
  // };
  // template driven ფორმა
  // formSubmitted() {
  //   let userData: string;
  //   userData = JSON.stringify(this.formData);
  //   localStorage.setItem('user', userData);
  // }
}



// template driven ფორმა
// interface iFormsObj {
//   firstname: string;
//   email: string;
//   password: string;
// }
