// Data structures with descriptions
const deployments = [
    { name: "Search and Destroy", desc: "Divide the battlefield into four quarters. Players set up in opposite corners, 9\" away from the center." },
    { name: "Hammer and Anvil", desc: "Players set up on the short battlefield edges, creating a long 'no man's land' between them." },
    { name: "Dawn of War", desc: "Standard deployment along the long edges of the battlefield, 24\" apart." }
];

const primaries = [
    { name: "Take and Hold", desc: "Control one or more objectives to score 5VP. Control two or more for 10VP. Control more than your opponent for 15VP." },
    { name: "Scorched Earth", desc: "Starting from round 2, you can use a 'Burn' action to destroy an objective in No Man's Land for massive VP." },
    { name: "Purge the Foe", desc: "Score 4VP if you destroyed one or more enemy units this turn, and an extra 4VP if you destroyed more than your opponent." }
];

const rules = [
    { name: "Chilling Rain", desc: "The weather is calm. No special mission rules apply to this engagement." },
    { name: "Hidden Supplies", desc: "Add one additional objective marker to the center of No Man's Land." },
    { name: "Minefields", desc: "Each time a unit Advances or Falls Back, roll a D6. On a 1, that unit takes D3 mortal wounds." }
];

function generateMission() {
    // Randomize
    const d = deployments[Math.floor(Math.random() * deployments.length)];
    const p = primaries[Math.floor(Math.random() * primaries.length)];
    const r = rules[Math.floor(Math.random() * rules.length)];

    // Update Titles
    document.getElementById('deployment').innerText = d.name;
    document.getElementById('primary').innerText = p.name;
    document.getElementById('rule').innerText = r.name;

    // Update Descriptions (The new parts)
    document.getElementById('deployment-desc').innerText = d.desc;
    document.getElementById('primary-desc').innerText = p.desc;
    document.getElementById('rule-desc').innerText = r.desc;
}