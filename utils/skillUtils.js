function calculateSkillGaps(requiredSkills, userSkills) {
    if (!Array.isArray(requiredSkills)) {
        return [];
    }

    if (!Array.isArray(userSkills)) {
        userSkills = [];
    }

    return requiredSkills.filter(
        skill => !userSkills.includes(skill)
    );
}


function calculateReadiness(requiredSkills, userSkills) {
    if (!Array.isArray(requiredSkills) || requiredSkills.length === 0) {
        return 0;
    }

    if (!Array.isArray(userSkills)) {
        userSkills = [];
    }

    const matchedSkills = requiredSkills.filter(
        skill => userSkills.includes(skill)
    );

    return Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
    );
}


function getMatchedSkills(requiredSkills, userSkills) {
    if (!Array.isArray(requiredSkills)) {
        return [];
    }

    if (!Array.isArray(userSkills)) {
        userSkills = [];
    }

    return requiredSkills.filter(
        skill => userSkills.includes(skill)
    );
}


module.exports = {
    calculateSkillGaps,
    calculateReadiness,
    getMatchedSkills
};