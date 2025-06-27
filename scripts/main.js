console.log("Dreambrew sheet loaded!");

class DreambrewActorSheet extends dnd5e.applications.actor.ActorSheet5eCharacter {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "character", "dreambrew"],
      template: "templates/sheet.html",
      width: 800,
      height: 700,
      tabs: [
        { navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }
      ]
    });
  }

  getData() {
    const data = super.getData();
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
  }
}

// REGISTER THE SHEET PROPERLY
Hooks.once("init", () => {
  console.log("Initializing Dreambrew Character Sheet");

  // Unregister the default sheet if needed
  CONFIG.Actor.sheetClasses["dnd5e"]["character"] = CONFIG.Actor.sheetClasses["dnd5e"]["character"].filter(
    s => s.label !== "Dreambrew Sheet"
  );

  // Register your custom sheet
  Actors.registerSheet("dnd5e", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: false,
    label: "Dreambrew Sheet"
  });

  console.log("Dreambrew sheet registered!");
});
