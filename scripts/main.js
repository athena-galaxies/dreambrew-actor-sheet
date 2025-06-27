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
    // Put custom logic here if needed
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add your interactive events here if needed
  }
}

Hooks.once("init", () => {
  console.log("Initializing Dreambrew Character Sheet");

  // Register the new sheet
  Actors.unregisterSheet("dnd5e", dnd5e.applications.actor.ActorSheet5eCharacter);
  Actors.registerSheet("dnd5e", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Dreambrew Sheet"
  });
});
