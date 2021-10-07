import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private dir = 'uploads/';

  constructor(private storage: AngularFireStorage) { }

  storeFile(fileName: string, file: any) {
    return this.storage.upload(this.dir + fileName, file);
  }

  async storeFileAndGetURL(name: string, file: any) {

    let task = await this.storeFile(name, file);
    let fileUrl = await task.ref.getDownloadURL();

    return fileUrl;
  }

}
