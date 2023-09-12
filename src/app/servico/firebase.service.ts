import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';
import { Produtos } from '../model/produto.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //Ferramenta para manipular as coleções
  itemCollection: AngularFirestoreCollection


  constructor(private af: AngularFirestore) { 
    this.itemCollection = af.collection('produtos');    
  }

  //Busca todos os produtos
  consulta(){
    return this.itemCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    )
  }

  //Busca somente um produto
  consultaOne(id: string){
    return this.itemCollection.doc(id).valueChanges();
  }

  cadastro(dados: any){
    return this.itemCollection.add(dados)
  }

  deletar(id: string){
    return this.itemCollection.doc(id).delete()
  }

  editar(id: any, dados: Produtos){
    return this.itemCollection.doc(id).update(dados)
  }


}



