import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Executor } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class AuthhService {

  constructor() { }
    createNewUser(email:string,password:string){
      return new Promise(
        (resolve,reject)=>{
          firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password).then(
            ()=>
            {
              resolve();
            },
            (error)=>{
              reject(error);
            }
          );
        }



      );

    

    }
    login(email:string,password:string){
      return new Promise(
        (resolve,reject)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>
            {
              resolve();
            },
            (error)=>{
              reject(error);
            }
        );
          }
      );
    }
  logout(){
    firebase.auth().signOut();
  }
}