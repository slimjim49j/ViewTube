import { postLike, deleteLike, getAllUserLikes } from "../utils/likes"

export const RECEIVE_ALL_USER_LIKES = "RECEIVE_ALL_USER_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveAllUserLikes = likes => ({
    type: RECEIVE_ALL_USER_LIKES,
    likes,
})

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like,
})

const removeLike = like => ({
    type: REMOVE_LIKE,
    like,
})

export const fetchAllUserLikes = () => dispatch => getAllUserLikes()
    .then(likes => dispatch(receiveAllUserLikes(likes)));

export const createLike = newLike => dispatch => postLike(newLike)
    .then(like => dispatch(receiveLike(like)));


export const destroyLike = likeId => dispatch => deleteLike(likeId)
    .then(destroyedLike => dispatch(removeLike(destroyedLike)));





// {
//     entities: {
//         videos: {
//             3: {
//                 like_count: 200
//             }
//         },
//         comments: {
//             30: {
//                 like_count: 10
//             }
//         }
//         user_likes: {
//             1: {
//                 likable_type: "video",
//                 likable_id: 3,
//                 dislike: true
//             },
//             2: {
//                 likable_type: "comment",
//                 likable_id: 360,
//                 dislike: false
//             }
//         }
//     }
// }



// {
//     entities: {
//         videos: {
//             3: {
//                 like_count: 200
//             }
//         },
//         comments: {
//             30: {
//                 like_count: 10
//             }
//         }
//         user_video_likes: {
//             2: {
//                 dislike: false
//             },
//             4: {
//                 dislike: false
//             }
//         },
//         user_comment_likes: {
//             3: {
//                 dislike: true
//             },
//             900: {
//                 dislike: false
//             }
//         }
//     }
// }



// {
//     entities: {
//         videos: {
//             1: {
//                 like_id:
//             }
//         },
//         comments: {
//             3: {
//                 like_id:
//             }
//         }
//     }
// }