var team = $('.members');

teamInfo.forEach((member) => {
    console.log(member.img);
    team[0].innerHTML +=`
        <div class="team-item wow fadeInUp" data-wow-delay="1.2s">
            <div class="team-img">
                <img class="img-fluid" src=${member.img} alt="">
            <div class="team-overlay">
                <div class="overlay-social-icon text-center">
                <ul class="social-icons">
                    <li>
                    <a href="#">
                        <i class="lni-facebook-filled" aria-hidden="true"></i>
                    </a>
                    </li>
                    <!-- <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li> -->
                    <li>
                    <a href="#">
                        <i class="lni-linkedin-filled" aria-hidden="true"></i>
                    </a>
                    </li>
                    <!-- <li><a href="#"><i class="lni-behance" aria-hidden="true"></i></a></li> -->
                </ul>
                </div>
            </div>
            </div>
            <div class="info-text">
                <h3>${member.name}</h3>
            </div>
        </div>
        `;
    

})

// console.log(team[0].innerHTML);