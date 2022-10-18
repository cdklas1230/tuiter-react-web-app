import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
       <ul class="list-group mt-2">
       <li class="list-group-item">
           <div class="item-subtitle">
                <span>Who to follow</span>
           </div>
       </li> 
         ${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
       </ul>
   `);
}
export default WhoToFollowList;