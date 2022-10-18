import active from "./active.js";
import NavigationList from "./NavigationList.js";

const NavigationSideBar = () => {
    return(`
       <ul class="list-group mt-2">
         ${
        active.map(active => {
            return (NavigationList(active));
        }).join('')
    }
       </ul>
    `);
}
export default NavigationSideBar;