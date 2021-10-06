import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../api/firebase";
import { Post } from "./Post";

export const PostScroller: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        (async () => {

            const querySnapshot = await getDocs(collection(firestore, "posts"));
            console.log(querySnapshot.docs);
            const incomingPosts: Post[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(data.created.toDate());
                incomingPosts.push({
                    ...data as Omit<Post, 'AID' | 'created'>,
                    AID: doc.id,
                    created: data.created.toDate(),
                });
            });
            console.log(incomingPosts);
            setPosts(incomingPosts);

        })();
    }, []);

    return (<section className="posts">
        {posts.map((p) => <Post {...p} key={p.AID} />)}
    </section>);
}