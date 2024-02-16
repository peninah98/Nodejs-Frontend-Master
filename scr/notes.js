import { getDB, insertDB, saveDB } from "./db"

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  }
  await insertDB(newNote)
  return newNote
}

export const getAllNotes = async () => {
  const { notes } = await getDB()
  return notes
}
