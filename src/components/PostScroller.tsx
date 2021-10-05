import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export const PostScroller: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        axios.get('http://localhost/trevorbrown-dev/article.php').then(res => {
            setPosts(res.data as Post[]);
            console.log(res.data);
        })
    }, []);

    return (<section className="posts">
        {posts.map((p) => <Post {...p} key={p.AID} />)}
    </section>);
}