import { addDoc, collection, getDocs, query, where } from "@firebase/firestore"; // for creating a pointer to our Document
import { firestore } from "../firebase/clientApp";

const emailListRef = collection(firestore, "emailList");

export const addEmailList = async (data: { email: string }) => {
  const Emailquery = query(emailListRef, where("email", "==", data.email));
  const querySnapshot = await getDocs(Emailquery);

  if (!querySnapshot.empty) throw "an email has already exist";
  return await addDoc(emailListRef, { ...data });
};

export const getEmailList = async () => {
  const docSnap = await getDocs(collection(firestore, "emailList"));

  if (docSnap.empty) return;

  return docSnap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};
