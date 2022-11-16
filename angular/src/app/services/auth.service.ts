import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  // INICIO DE SESIÓN CON USUARIO Y CONTRASEÑA
  async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);

    } catch (error) {
      return console.log(error);
    }
  }

  //RECUPERAR CONTRASEÑA
  async ForgotPassword() {

  }

  //CERRAR SESIÓN
  async logOut() {
    await this.auth.signOut();
  }

  //CREAR UN NUEVO USUARIO CON EMAIL Y CONTRASEÑA
  async register(user: any) {
    try {
      return await this.auth.createUserWithEmailAndPassword(user.email_user, user.password_user).then((credenciales) => {
        this.setUserData(credenciales.user!.uid, user);
      });

    } catch (error) {
      return console.log(error);
    }
  }

  //GUARDADO DEL USER EN FIRESTORE
  async setUserData(uid:string, user: any) {
    try {
      const userRef: AngularFirestoreDocument = this.firestore.doc(`usuarios/${uid}`);
      const userData: UserInterface = {
        uid: uid,
        username: user.username,
        nombre_user: user.nombre_user,
        apellido_user: user.apellido_user,
        email_user: user.email_user,
        user_permissions: "estudiante"
        // avatar: user.avatar,
      }

      return await userRef.set(userData);

    } catch (error) {
      console.log('Error al guardar los datos del usuario en firestore' + error);
    }
  }

  //TRAER EL USER POR SU UID GUARDADO EN FIRESTORE
  async getUser() {

  }

  //ESTADO DE LA SESSION DEL USUARIO (LOGEADO / NO_LOGEADO)
  async userState() {

  }
}
