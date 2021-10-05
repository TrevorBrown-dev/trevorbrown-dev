export interface Post {
    AID: number;
    title: string;
    created: string;
    content: string;
}
export const Post: React.FC<Post> = ({ title, created, content }) => {
    console.log(title);
    return (
        <article className="post">
            <h4>{title}</h4><sub>{created}</sub>
            <p>{content}</p>
        </article>
    );
}