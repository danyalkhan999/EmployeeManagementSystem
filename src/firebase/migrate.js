import { db } from "./config";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { employees, admin } from "../utils/localStorage.jsx"; // Your localStorage data

export async function migrateDataToFirebase() {
  try {
    // 1. Store Admin Data
    await setDoc(doc(db, "admin", "admin100"), {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      password: admin.password, // Note: Hash passwords in production!
    });

    // 2. Store Employees + Tasks
    for (const employee of employees) {
      // Add employee document
      await setDoc(doc(db, "employees", employee.id.toString()), {
        name: employee.name,
        email: employee.email,
        password: employee.password,
        taskCount: employee.taskCount,
      });

      // Add tasks subcollection
      const tasksRef = collection(db, `employees/${employee.id}/tasks`);
      for (const task of employee.tasks) {
        await addDoc(tasksRef, task);
      }
    }

    console.log("✅ Data migrated to Firebase!");
    localStorage.clear(); // Delete old localStorage data
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}
