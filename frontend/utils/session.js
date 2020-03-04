const formatUser = user => (
    {
        user: {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            password: user.password,
        }
    }
)

export const postUser = user => (
    $.ajax({
        url: "api/users",
        method: "POST",
        data: formatUser(user),
    })
);

export const postSession = user => (
    $.ajax({
        url: "api/session",
        method: "POST",
        data: formatUser(user),
    })
);

export const deleteSession = () => (
    $.ajax({
        url: "api/session",
        method: "DELETE",
    })
)