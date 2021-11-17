
import { LightningElement } from "lwc";


export default class Navbar extends LightningElement{
    showLoginColor = false;
    signup = false;
    login = false;
    
    showSignup(){
        if(!this.login){
            this.template.querySelector('.signup').style.backgroundColor ='#FF8A63';
            this.signup = !this.signup;
        }
        if(this.signup == false){
            this.template.querySelector('.signup').style.backgroundColor = "#fff3e5";
        }
        
    }

    closeSignup(){
        this.template.querySelector('.signup').style.backgroundColor ='#fff3e5';
        this.signup = false;
    }

   
    showLogin(){

        if(this.signup == false){

            this.template.querySelector('.login').style.backgroundColor ='#FF8A63';
            this.login = !this.login;
            if(this.login == false){
                this.template.querySelector('.login').style.backgroundColor = "#fff3e5";
            }
        }
        
    }
    closeLogin(){
      this.template.querySelector('.login').style.backgroundColor ='#fff3e5';
        this.login = false;
    }



    
}