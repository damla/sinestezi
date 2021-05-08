import { questions } from '../../../data'

export default function questionHandler({ query: { id } }, res) {
  const filtered = questions.filter((q) => q.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Question with id: ${id} not found.` })
  }
}