import { comments } from "../../../data/comments"

//.1 ji hil usol
export default function handler(req, res) {
  const { commentId } = req.query

  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    )
    res.status(200).json(comment)
  } else if (req.method === "DELETE") {
    const deleteComment = comments.find(
      (commit) => commit.id === parseInt(commentId)
    )
    const index = comments.findIndex(
      (commit) => commit.id === parseInt(commentId)
    )
    comments.splice(index, 1)

    res.status(200).json(deleteComment)
  }

  //2 ji hil usol

  //   if (req.method === "GET") {
  //     const comment = comments.find(
  //       (comment) => comment.id === parseInt(commentId)
  //     )
  //     res.status(200).json(comment)
  //   } else if (req.method === "DELETE") {
  //     const commentIndex = comments.findIndex(
  //       (comment) => comment.id === parseInt(commentId)
  //     )
  //     if (commentIndex !== -1) {
  //       comments.splice(commentIndex, 1)
  //       res.status(200).json({ message: "Comment deleted" })
  //     } else {
  //       res.status(404).json({ message: "Comment not found" })
  //     }
  //   }
}
