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
    // Add your custom logic here
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Interactive stuff goes here
  }
}

Hooks.once("init", () => {
  console.log("Initializing Dreambrew Character Sheet");

  // This is what makes it SHOW UP
  Actors.registerSheet("dnd5e", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: false,
    label: "Dreambrew Sheet"
  });

  // Optional: also register it into CONFIG if needed
  CONFIG.Actor.sheetClasses["dnd5e"]["dreambrew"] = {
    label: "Dreambrew Sheet",
    sheetClass: DreambrewActorSheet,
    types: ["character"],
    makeDefault: false
  };
});
