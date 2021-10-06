export interface Post {
    AID: string;
    title: string;
    created: Date;
    content: string;
}
export const Post: React.FC<Post> = ({ title, created, content }) => {
    console.log(title);
    return (
        <article className="post">
            <h4>{title}</h4>
            <sub>{created.toLocaleString()}</sub>
            <p>{content}</p>
        </article>
    );
}