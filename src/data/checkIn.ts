import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getApp } from "../firebase";

export interface ICheckIn {
  duration: number;
  tag: string;
  activities: string;
  recordDate: string;
}

export async function getCheckIns(): Promise<ICheckIn[]> {
  const db = getFirestore(await getApp());
  const snapshot = await getDocs(collection(db, "checkIns"));
  const docs = snapshot.docs.map(doc => doc.data());
  return docs as ICheckIn[];
}
