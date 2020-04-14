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