import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
       <!-- search field and cog-->
       <div class="row mt-2">
           <div class="d-flex align-items-center justify-content-between">
               <div class="row height d-flex col-11 justify-content-center align-items-center">
                   <div class="search" >
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control" placeholder="Search Tuiter"
                                   style="border: none">
                   </div>
               </div>
                   <div class="d-flex col-1 justify-content-center">
                        <i class="fas fa-cog" style="color: #00BFFF"></i>
               </div>
           </div>
       </div>
       <!-- nav bar -->
       <div class="row mt-2 ms-0">
            <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="/">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Sports</a>
                </li>
                <div class="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                    <li class="nav-item">
                       <a class="nav-link" href="/">Entertainment</a>
                    </li>
                </div>
           </ul>
       </div>
       <!-- image with overlaid text -->
       <div>
            <img src="../image/spaceX.jpg" class="news-top-image" alt="spacex">
            <div class="news-top-text">SpaceX's Starship</div>
       </div>
       ${PostSummaryList()}
   `);
}

export default ExploreComponent;