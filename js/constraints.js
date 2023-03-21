var constraintList = document.getElementById('constraint-list');
const mdnList = ["autoGainControl","width","height","aspectRatio","frameRate","facingMode","resizeMode","volume Deprecated Non-standard","sampleRate","sampleSize","echoCancellation","latency","noiseSuppression","channelCount","deviceId","groupId","displaySurface","logicalSurface"];

function testConstraint(constraint) {
    return MediaDevices.getSupportedConstraints().hasOwnProperty(constraint);
}




function addListItem(key, value) {
    const el = "<li>" + key + ": " + value + "</li>";
    constraintList.appendChild(el);
}

mdnList.forEach(constraint => {
    addListItem(constraint, testConstraint(constraint).toString());
});