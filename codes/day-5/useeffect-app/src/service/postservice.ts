import axios from 'axios'
import { Post } from '../models/post'

const postUrl = 'https://jsonplaceholder.typicode.com/posts'
export const fetchPosts = () => {
    return axios.get<Post[]>(postUrl)
}
export const fetchPost = (postId: number) => {
    return axios.get<Post>(`${postUrl}/${postId}`)
}
export const addPost = (post: Post) => {
    return axios.post<Post>(postUrl, post)
}
export const updatePost = (post: Post, postId: number) => {
    return axios.put<Post>(`${postUrl}/${postId}`, post)
}
export const deletePost = (postId: number) => {
    return axios.delete<Post>(`${postUrl}/${postId}`)
}