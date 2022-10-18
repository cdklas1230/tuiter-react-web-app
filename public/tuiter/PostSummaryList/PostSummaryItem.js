const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item">
           <div class="row g-0">
              <div class="col-10">
                 <small class="item-title text-muted">${post.topic}</small>
                    <div class="item-subtitle">
                        <span>${post.userName}</span>
                        <i class="fas fa-check-circle"></i>
                        <small class="text-muted"> -${post.time}</small>
                    </div>
                    <div class="item-content">
                        ${post.title}
                    </div>
                    </div>
              <div class="col-2">
                 <div class="item-image">
                      <img src=${post.image} class="img-fluid"/>
                 </div>
              </div>
           </div>
         </div>
    `)
}

export default PostSummaryItem;