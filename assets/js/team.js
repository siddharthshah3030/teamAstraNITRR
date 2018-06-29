var team = $('.members');
teamInfo.sort(function(a,b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
})

teamInfo.forEach((member) => {
    console.log(member.img);
    team[0].innerHTML +=`
        <div class="team-item wow fadeInUp" data-wow-delay="1.2s">
            <div class="team-img">
                <img class="img-fluid" src="./assets/img/team300/${member.name.toLowerCase()}.jpg" alt="">
            <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                <ul class="social-icons">
                    <li>
                    <a href="${member.social_media.split('\n')[0]}" target="_blank">
                        <i class="lni-link" aria-hidden="true"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div class="info-text">
                <h3>${member.name.toLowerCase()}</h3>
            </div>
        </div>
        `;
})

// console.log(team[0].innerHTML);