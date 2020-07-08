import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../abstract/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  store = new BehaviorSubject<User[]>([]);
  usersObs = this.store.asObservable();
  constructor() { }

  add(user: User){
    const users = this.store.getValue();
    users.push(user);
    this.store.next(users);
  }

  delete(uid: string){
    const users = this.store.getValue();
    const index = users.findIndex((u) => u.uid === uid);
    if(index === -1) throw new Error('User does not exists');
    users.splice(index, 1);
    this.store.next(users);
  }
}
