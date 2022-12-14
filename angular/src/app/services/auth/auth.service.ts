import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserInterface } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  // INICIO DE SESIÓN
  async login(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password).catch(error => console.log(error));
  }

  //CERRAR SESIÓN
  logOut() {
    return this.auth.signOut();
  }

  //RECUPERAR CONTRASEÑA
  async forgotPassword() {

  }

  //CREAR UN NUEVO USUARIO CON EMAIL Y CONTRASEÑA
  async register(user: any) {
    return await this.auth.createUserWithEmailAndPassword(user.email_user, user.password_user).then(credenciales => this.setUserData(credenciales.user!.uid, user).catch(err => console.log(err)));
  }

  //GUARDADO DEL USER EN FIRESTORE
  private async setUserData(uid: string, user: any) {
    try {
      const userRef: AngularFirestoreDocument = this.firestore.doc(`usuarios/${uid}`);
      const userData: UserInterface = {
        uid: uid,
        username: user.username,
        nombre_user: user.nombre_user,
        apellido_user: user.apellido_user,
        email_user: user.email_user,
        rol: "estudiante"
        // avatar: user.avatar,
      }

      return await userRef.set(userData, {merge: true});

    } catch (error) {
      console.log('Error al guardar los datos del usuario en firestore' + error);
    }
  }

  //ESTADO DE LA SESSION DEL USUARIO (LOGUEADO / NO_LOGUEADO)
  isAuth() {
    return this.auth.authState.pipe(map(user => user));
  }

  // SE TRAE LOS DATOS DEL USUARIO PARA VERIFICAR SU ROL
  isUserAdmin(uid: string) {
    return this.firestore.doc<UserInterface>(`usuarios/${uid}`).valueChanges();
  }
}
