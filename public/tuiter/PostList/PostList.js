const PostList = (PostItem) => {
    return (`
        <div class="list-group-item">
            <div class="row g-0">
                <div class="col-2">
                    <div class="right-item-image" style="width: 60px">
                        <img src=${PostItem.avatarIcon} class="img-fluid"/>
                    </div>
                </div>
                <div class="col-10">
                    <div class="item-subtitle" style="color:white">
                        <span>${PostItem.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <small style="color:dimgray"> @${PostItem.handle}</small>
                        <small style="color:dimgray"> -${PostItem.time}</small>
                    </div>
                    <div class="item-at" style="color:lightgray">
                        ${PostItem.abstract}
                    </div>
                    <div class="content-part" style="border: 1px solid dimgray; border-radius: 15px; margin-top:15px; overflow: hidden; object-fit: cover">
                        <div>
                            <img src= ${PostItem.image} style="width: 100%" >
                        </div>
                        <div class="list-group-item" style="border-top: 1px solid dimgray; display: ${PostItem.content ? 'block' : 'none'}">
                             ${PostItem.topic} </br>
                             <small style="color:dimgray">${PostItem.title} </small> </br>
                             <small style="color:dimgray"> ${PostItem.link}  </small>
                        </div>
                    </div>
                    <div class="row mt-2" >
                        <div class="col-3">
                            <i class="far fa-comment" style="color:dimgray"></i>
                            <small style="color:dimgray"> &nbsp ${PostItem.comment} </small> 
                        </div>
                        <div class="col-3">
                            <i class="fas fa-retweet" style="color:dimgray"></i>
                            <small style="color:dimgray"> &nbsp ${PostItem.retweet} </small> </br>
                        </div>
                        <div class="col-3">
                            <i class="far fa-heart" style="color:dimgray"></i>
                            <small style="color:dimgray"> &nbsp ${PostItem.like} </small> </br>
                        </div>
                        <div class="col-3">
                            <i class="fas fa-external-link-alt" style="color:dimgray"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export default PostList;