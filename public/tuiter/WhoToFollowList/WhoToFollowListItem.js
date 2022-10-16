const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item">
        <div class="row g-0">
            <div class="col-2">
                <div class="right-item-image">
                    <img src=${who.avatarIcon} class="img-fluid"/>
                </div>
            </div>
         <div class="col-7 ps-2">
              <div class="item-subtitle" style="color:white">
                   <span>${who.userName}</span>
                   <i class="fas fa-check-circle"></i>
              </div>
              <div class="item-at" style="color:lightgray">
                <span>@${who.handle}</span>
              </div>
          </div>
          <div class="col-3">
              <div class="row mt-2">
                   <div class="right-button d-grid gap-2">
                        <button type="button" class="btn btn-primary">Follow</button>
                   </div>
              </div>
          </div>
       </div>
    </div>`
    );
}
export default WhoToFollowListItem;