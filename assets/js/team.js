var team19 = document.querySelector('#team19');
var team18 = document.querySelector('#team18');
var volunteer = document.querySelector('#volunteer');

function build_team(place, team_data) {
    place.classList.add('d-flex', 'justify-content-center')
    Object.keys(team_data).forEach((branch) => {
        team_data[branch].forEach((member) => {
            var member_div = document.createElement('div')
            member_div.classList.add('team-item', 'wow', 'fadeInUp', 'my-sm-4')
            member_div.innerHTML = `
                <div class="team-img">
                    <img class="img-fluid" src="./assets/img/team300/${member.name.toLowerCase()}.jpg" alt="">
                    <div class="team-overlay">
                        <div class="overlay-social-icon text-center">
                            <ul class="social-icons">
                                <li><a target="blank" href="${member.social_media}"><i class="lni-anchor" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info-text">
                    <h3>${member.name}</h3>
                </div>
            `;
            place.appendChild(member_div)
        })
        // place.appendChild(div)
    })
}

build_team(team19, teamInfoCompiled.team19)
build_team(team18, teamInfoCompiled.team18)
build_team(volunteer, teamInfoCompiled.volunteer)
