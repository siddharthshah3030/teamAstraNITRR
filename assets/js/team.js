var team = document.querySelector('#team .d-flex');

var teamMember = `
<div class="team-item wow fadeInUp" data-wow-delay="1.2s">
    <div class="team-img">
        <img class="img-fluid" src="assets/img/team300/00100sPORTRAIT_00100_BURST20180426164356867_COVER - Anuj Soni.jpg" alt="">
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
        <h3> Chris Adams </h3>
    </div>
</div>
`;

console.log(teamInfo);
team.innerHTML += teamMember;
