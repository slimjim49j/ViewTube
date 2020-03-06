export const getVideo = id => (
    $.ajax({
        url: `/api/videos/${id}`,
        method: "GET",
    })
)

export const postVideo = formData => (
    $.ajax({
        url: "/api/videos",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
    })
)