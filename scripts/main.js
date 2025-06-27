Hooks.once("init", async function () {
  console.log("Dreambrew | Initializing Dreambrew Character Sheet");

  // Register the custom actor sheet for dnd5e system
  Actors.unregisterSheet("dnd5e", ActorSheet5eCharacter);
  Actors.registerSheet("dreambrew", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: true
  });
});

// Define your custom actor sheet class
class DreambrewActorSheet extends ActorSheet5eCharacter {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dreambrew", "sheet", "actor", "character"],
      template: "modules/dreambrew-actor-sheet/templates/dreambrew-sheet.html",
      width: 800,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
    });
  }

  /** @override */
  getData() {
    const data = super.getData();
    // You can manipulate or add custom data here if needed
    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    // Add custom listeners here
  }
}
