const teamInfo = require('./astra-2k18-team-info');
const fs = require('fs')

const team18 = {}
const team19 = {}
const volunteer = {}
// place members in the respective team
place_members = (team, member) => {
    if (!team[member.branch]) {
        team[member.branch] = []
    }
    team[member.branch].push(member)
}
// checking the team of each member
teamInfo.forEach(member => {
    if (member.desig === 'Team 2018') {
        place_members(team18, member)
    } else if (member.desig === 'Team 2019') {
        place_members(team19, member)
    } else {
        place_members(volunteer, member)
    }
})
// print team 
print_team = (team) => {
    Object.keys(team).forEach((branch) => {
        team[branch].forEach((member) => {
            console.log(`${member.name}\t: ${member.social_media}`);
        })
    })
    console.log();
}
// output
let output = {
    team18,
    team19,
    volunteer
}

fs.writeFile('assets/js/team-info-compiled.js', 'let output = ' + JSON.stringify(output, null, 2), function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('file written');
})

// print_team(team19)
// print_team(team18)
// print_team(volunteer)