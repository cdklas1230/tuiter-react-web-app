import PostItems from "./PostItems.js";
import PostList from  "./PostList.js";

const PostListPart = () => {
    return(`
       <ul class="list-group mt-2">
         ${
        PostItems.map(PostItem => {
            return (PostList(PostItem));
        }).join('')
    }
       </ul>
    `);
}
export default PostListPart;