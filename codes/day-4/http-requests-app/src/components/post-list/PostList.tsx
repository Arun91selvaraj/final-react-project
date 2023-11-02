import React, { Component, useEffect, useState } from 'react'
import { Post } from '../../models/post'
import { fetchPost, fetchPosts } from '../../service/postservice'

type PostListStateType = {
    posts: Post[] | undefined,
    isRequestComplete: boolean,
    errorMessage: string,
    post: Post | undefined
}
type PostListPropType = {
    postId: number
}

export default class PostList extends Component<PostListPropType, PostListStateType> {
    constructor(props: PostListPropType) {
        super(props)
        console.log('PL created')
    }
    state: Readonly<PostListStateType> = {
        posts: undefined,
        isRequestComplete: false,
        errorMessage: '',
        post: undefined
    }
    render() {
        //this.props.postId (1) => prevProps
        //this.props.postId (1)
        console.log('PL rendered')
        const { isRequestComplete, posts, errorMessage } = this.state
        let design = undefined
        if (!isRequestComplete) {
            design = <span>Loading...pleas wait</span>
        } else if (errorMessage !== '') {
            design = <span>{errorMessage}</span>
        } else if (!posts || posts.length === 0) {
            design = <span>No records</span>
        } else {
            design = <>
                This has just been fetched:&nbsp;
                <br />
                <i><b>{this.state.post?.title}</b></i>
                {
                    posts.map(
                        (p) => (
                            <div>
                                <h3>{p.title}</h3>
                                <br />
                                <div>{p.body}</div>
                            </div>
                        )
                    )
                }
            </>
        }
        return (
            <>
                <br />
                {design}
            </>
        )
    }

    componentDidMount(): void {
        console.log('PL mounted')
        this.getData()
    }

    componentWillUnmount(): void {
        console.log('PL unmounted....')
    }

    componentDidUpdate(
        prevProps: Readonly<PostListPropType>,
        prevState: Readonly<PostListStateType>,
        snapshot?: any
    ): void {
        console.log('PL update....')
        if (prevProps.postId !== this.props.postId || this.state.post === undefined) {
            fetchPost(this.props.postId).then(
                (resp) => this.setState(
                    (oldState) => {
                        return {
                            ...oldState,
                            post: resp.data
                        }
                    }
                )
            )
        }
    }

    getData = () => {
        fetchPosts()
            .then(
                (response) => {
                    if (response.data) {
                        this.setState({
                            isRequestComplete: true,
                            errorMessage: '',
                            posts: response.data
                        })
                    } else {
                        this.setState({
                            isRequestComplete: true,
                            errorMessage: '',
                            posts: undefined
                        })
                    }
                },
                (err: Error) => {
                    this.setState({
                        isRequestComplete: true,
                        errorMessage: err.message,
                        posts: undefined
                    })
                }
            )
    }
}

/*
const PostList = () => {
    // const [postsState, setPostsState] = useState<PostListStateType>({
    //     posts: undefined,
    //     isRequestComplete: false,
    //     errorMessage: ''
    // })

    useEffect(
        () => {
            console.log('always...')
        }
    )

    const [isRequestComplete, setIsRequestComplete] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [posts, setPosts] = useState<Post[] | undefined>(undefined)

    let design = undefined
    if (!isRequestComplete) {
        design = <span>Loading...pleas wait</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (!posts || posts.length === 0) {
        design = <span>No records</span>
    } else {
        design = posts.map(
            (p) => (
                <div>
                    <h3>{p.title}</h3>
                    <br />
                    <div>{p.body}</div>
                </div>
            )
        )
    }
    return design
}

export default PostList
*/