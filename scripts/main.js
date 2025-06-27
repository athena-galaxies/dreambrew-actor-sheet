class DreambrewActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["dnd5e", "sheet", "actor", "dreambrew"],
      template: "templates/sheet.html",
      width: 800,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "overview" }]
    });
  }

  getData() {
    const data = super.getData();
    // You can customize what data is passed to the sheet here
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add any interactivity or event listeners here
  }
}
