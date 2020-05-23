export const getComments = videoId => (
    $.ajax({
      url: `/api/videos/${videoId}/comments`,
      method: "GET"
    })
)

export const postComment = comment => (
    $.ajax({
        url: "/api/comments",
        method: "POST",
        data: comment
    })
)

export const patchComment = (commentId, comment) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: "PATCH",
        data: comment
    })
)

export const deleteComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    })
)