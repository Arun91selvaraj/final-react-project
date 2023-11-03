import React, { useEffect, useState } from 'react'
import { Post } from '../../models/post'
import { fetchPost } from '../../service/postservice'

type PostInfoPropType = {
    postId: number
}
const PostInfo = (props: Readonly<PostInfoPropType>) => {
    console.log('PostInfo rendered')
    const [isRequestComplete, setIsRequestComplete] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [post, setPost] = useState<Post | undefined>(undefined)

    const getData = () => {
        fetchPost(props.postId)
            .then(
                (response) => {
                    if (response.data) {
                        setIsRequestComplete(true)
                        setErrorMessage('')
                        setPost(response.data)
                    } else {
                        setIsRequestComplete(true)
                        setErrorMessage('')
                        setPost(undefined)
                    }
                },
                (err: Error) => {
                    setIsRequestComplete(true)
                    setErrorMessage(err.message)
                    setPost(undefined)
                }
            )
    }

    useEffect(
        () => getData(),
        [props.postId]
    )


    let design: JSX.Element | JSX.Element[];
    if (!isRequestComplete) {
        design = <span>Loading...please wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!post) {
        design = <span>No record</span>
    } else {
        design = (
            <table>
                <tbody>
                    <tr>
                        <td>Id:</td>
                        <td>{post.id}</td>
                    </tr>
                    <tr>
                        <td>User Id:</td>
                        <td>{post.userId}</td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <td>Body:</td>
                        <td>{post.body}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return design
}

export default PostInfo