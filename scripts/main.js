class DreambrewActorSheet extends ActorSheet5eCharacter {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dreambrew", "sheet", "actor"],
      template: "templates/sheet.html", // Adjust if your file path is different
      width: 800,
      height: 700,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main"
        }
      ]
    });
  }
}

Hooks.once("init", () => {
  console.log("Dreambrew | Registering custom actor sheet");

  Actors.unregisterSheet("core", ActorSheet5eCharacter);
  Actors.registerSheet("dreambrew", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Dreambrew Sheet"
  });
});
