import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("reports");
    }

    add(data) {
        this.db.add(data).then(
            docRef => {
                console.log(docRef.id)
            }        
        );
    }

    get(name) {
        let data = []
        return this.db.where("name", "==", name).get().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }
}