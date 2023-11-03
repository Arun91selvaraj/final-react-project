import { useEffect, useState } from "react"
import { Post } from "../../models/post"
import { fetchPosts } from "../../service/postservice"
import PostInfo from "../post-info/PostInfo"

const PostList = () => {

    const [isRequestComplete, setIsRequestComplete] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [posts, setPosts] = useState<Post[] | undefined>(undefined)
    const [showState, setShowState] = useState<boolean>(false)
    const [selectedId, setSelectedId] = useState<number>(0)

    const selectedIdHandler = (id: number) => {
        setSelectedId(id)
        setShowState(true)
    }

    const getData = () => {
        fetchPosts()
            .then(
                (response) => {
                    if (response.data) {
                        setIsRequestComplete(true)
                        setErrorMessage('')
                        setPosts(response.data)
                    } else {
                        setIsRequestComplete(true)
                        setErrorMessage('')
                        setPosts(undefined)
                    }
                },
                (err: Error) => {
                    setIsRequestComplete(true)
                    setErrorMessage(err.message)
                    setPosts(undefined)
                }
            )
    }

    useEffect(
        () => {
            getData()
        },
        []
    )

    let design: JSX.Element | JSX.Element[];
    if (!isRequestComplete) {
        design = <span>Loading...please wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!posts || posts.length === 0) {
        design = <span>No records</span>
    } else {
        design = <>
            {
                posts?.slice(0, 3).map(
                    (p) => {
                        return (
                            <div key={p.id}>
                                <h3 onClick={
                                    () => selectedIdHandler(p.id)
                                }>
                                    <u>{p.title}</u>
                                </h3>
                                <br />
                                <div>{p.body}</div>
                            </div>)
                    }
                )
            }
            <br />
            <br />
            {
                showState && <PostInfo postId={selectedId} />
            }
        </>
    }
    return design
}
export default PostList