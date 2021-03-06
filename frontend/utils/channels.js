export const getChannel = id => (
    $.ajax({
        method: "GET",
        url: `/api/channels/${id}`,
    })
)

export const postChannel = channel => (
    $.ajax({
        method: "POST",
        url: "/api/channels",
        data: channel,
    })
);