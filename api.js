import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where  } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCeHgiGvaYBtIFDjOTz5S6FHYQty3JR2lA",
  authDomain: "van-life-app-e5c6a.firebaseapp.com",
  projectId: "van-life-app-e5c6a",
  storageBucket: "van-life-app-e5c6a.appspot.com",
  messagingSenderId: "346762767397",
  appId: "1:346762767397:web:16e17a3339642e219d63cc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export const getVans = async (i) => {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export const getVan = async (id) => {
   const docRef = doc(db, "vans", id)
   const snapshot = await getDoc(docRef)
   return {
    ...snapshot.data(),
    id: snapshot.id
   }
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "456"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}