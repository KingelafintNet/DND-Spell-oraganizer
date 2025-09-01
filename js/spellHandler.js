class Spell {
    constructor(name, level, school, range, ritual, castTime, components, duration, concentration, classes, description) {
        this.name = name;
        this.level = level;
        this.school = school;
        this.range = range;
        this.ritual = ritual;
        this.castTime = castTime;
        this.components = components;
        this.duration = duration;
        this.concentration = concentration;
        this.classes = classes;
        this.description = description;
    }
}

function openAddSpellGui() {
    document.getElementById("newSpellGui").style.display = "flex";
}

function addSpell() {
    new Spell(
        document.getElementById("spellName"),
        document.getElementById("spellLevel"),
        document.getElementById("spellSchool"),
        document.getElementById("spellRange"),
        document.getElementById("spellRitual"),
        document.getElementById("spellCastTime"),
        document.getElementById("spell"),
        document.getElementById("spell"),
        document.getElementById("spell"),
        document.getElementById("spell"),
        document.getElementById("spell")
    );
}

function getEleId(Id) {
    return document.getElementById("spell");
}