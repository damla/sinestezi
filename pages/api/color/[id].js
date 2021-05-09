import { colors } from '../../../data'

export default function colorHandler({ query: { id } }, res) {
  const filtered = colors.filter((c) => c.cid === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Question with id: ${id} not found.` })
  }
}