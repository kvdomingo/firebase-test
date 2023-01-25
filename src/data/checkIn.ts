import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export interface ICheckIn {
  duration: number;
  tag: string;
  activities: string;
  recordDate: string;
}

export async function getCheckIns() {
  const docRef = await getDocs(collection(db, "checkIns"));
  return docRef.docs.map(doc => doc.data());
}
