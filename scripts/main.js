console.log("Dreambrew sheet loaded!");

class DreambrewActorSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "character", "dreambrew"],
      template: "templates/sheet.html",
      width: 800,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  getData() {
    const data = super.getData();
    // Add custom logic here if needed
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add interactive events here
  }
}

// Expose globally
CONFIG.Actor.sheetClasses["dnd5e"]["dreambrew"] = {
  label: "Dreambrew Sheet",
  sheetClass: DreambrewActorSheet,
  types: ["character"],
  makeDefault: true
};

Hooks.once("init", () => {
  console.log("Initializing Dreambrew Character Sheet");
});
