console.log("Dreambrew sheet loaded!");

Hooks.once("init", function () {
  console.log("Initializing Dreambrew Character Sheet");

  Actors.registerSheet("dnd5e", DreambrewActorSheet, {
    types: ["character"],
    makeDefault: false,
    label: "Dreambrew Sheet"
  });
});