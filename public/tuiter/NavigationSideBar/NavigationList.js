const NavigationList = (active) => {
    return (`
   <div class="list-group mt-2">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item + ${active.attribute === 'home' ? 'active' : 'none'}" href="../HomeScreen/index.html">
        <i class="fas fa-home"></i> Home</a>
     <a class="list-group-item + ${active.attribute === 'explore' ? 'active' : 'none'}" href="../explore/index.html">
        <i class="fas fa-hashtag"></i> Explore</a>
     <a class="list-group-item + ${active.attribute === 'notifications' ? 'active' : 'none'}" href="/">
        <i class="fas fa-bell"></i> Notifications</a>
     <a class="list-group-item + ${active.attribute === 'messages' ? 'active' : 'none'}" href="/">
        <i class="fas fa-envelope"></i> Messages</a>
     <a class="list-group-item + ${active.attribute === 'bookmarks' ? 'active' : 'none'}" href="/">
        <i class="fas fa-bookmark"></i> Bookmarks</a>
     <a class="list-group-item + ${active.attribute === 'lists' ? 'active' : 'none'}" href="/">
        <i class="fas fa-list"></i> Lists</a> 
     <a class="list-group-item + ${active.attribute === 'profiles' ? 'active' : 'none'}" href="/">
       <i class="fas fa-user"></i> Profiles</a>   
     <a class="list-group-item + ${active.attribute === 'more' ? 'active' : 'none'}" href="/">
       <i class="fas fa-circle"></i> More</a>          
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationList;