const itemData = [
  ["minecraft:cobblestone", "Cobblestone", "Blocks", "#777777"],
  ["minecraft:stone", "Stone", "Blocks", "#858585"],
  ["minecraft:grass_block", "Grass Block", "Blocks", "#59a846"],
  ["minecraft:dirt", "Dirt", "Blocks", "#7b5134"],
  ["minecraft:oak_log", "Oak Log", "Blocks", "#8f6237"],
  ["minecraft:oak_planks", "Oak Planks", "Blocks", "#bd8750"],
  ["minecraft:glass", "Glass", "Blocks", "#bdeeff"],
  ["minecraft:obsidian", "Obsidian", "Blocks", "#241735"],
  ["minecraft:diamond_block", "Diamond Block", "Blocks", "#55d6e6"],
  ["minecraft:emerald_block", "Emerald Block", "Blocks", "#35c66c"],
  ["minecraft:gold_block", "Gold Block", "Blocks", "#f2ca4d"],
  ["minecraft:redstone_block", "Redstone Block", "Blocks", "#c93232"],
  ["minecraft:command_block", "Command Block", "Blocks", "#bd8b5a"],
  ["minecraft:barrier", "Barrier", "Blocks", "#d94242"],
  ["minecraft:torch", "Torch", "Blocks", "#ffca55"],
  ["minecraft:lantern", "Lantern", "Blocks", "#e8b95a"],
  ["minecraft:bookshelf", "Bookshelf", "Blocks", "#9b6a38"],
  ["minecraft:enchanting_table", "Enchanting Table", "Blocks", "#8f3ed1"],
  ["minecraft:anvil", "Anvil", "Blocks", "#5d6265"],
  ["minecraft:crafting_table", "Crafting Table", "Blocks", "#a86f3a"],
  ["minecraft:furnace", "Furnace", "Blocks", "#6d6d6d"],
  ["minecraft:chest", "Chest", "Blocks", "#b17635"],
  ["minecraft:ender_chest", "Ender Chest", "Blocks", "#204449"],
  ["minecraft:spawner", "Spawner", "Blocks", "#57666d"],
  ["minecraft:tnt", "TNT", "Blocks", "#d4483c"],
  ["minecraft:slime_block", "Slime Block", "Blocks", "#68d35f"],
  ["minecraft:honey_block", "Honey Block", "Blocks", "#e6a83f"],
  ["minecraft:beacon", "Beacon", "Blocks", "#bffcff"],
  ["minecraft:diamond_sword", "Diamond Sword", "Combat", "#64d9ff"],
  ["minecraft:netherite_sword", "Netherite Sword", "Combat", "#4a4148"],
  ["minecraft:bow", "Bow", "Combat", "#b77a3f"],
  ["minecraft:crossbow", "Crossbow", "Combat", "#8d633c"],
  ["minecraft:trident", "Trident", "Combat", "#5bd0d3"],
  ["minecraft:shield", "Shield", "Combat", "#9b6a42"],
  ["minecraft:arrow", "Arrow", "Combat", "#d8d8d8"],
  ["minecraft:spectral_arrow", "Spectral Arrow", "Combat", "#ffe071"],
  ["minecraft:tipped_arrow", "Tipped Arrow", "Combat", "#b56cff"],
  ["minecraft:diamond_pickaxe", "Diamond Pickaxe", "Tools", "#64d9ff"],
  ["minecraft:netherite_pickaxe", "Netherite Pickaxe", "Tools", "#4a4148"],
  ["minecraft:diamond_axe", "Diamond Axe", "Tools", "#64d9ff"],
  ["minecraft:diamond_shovel", "Diamond Shovel", "Tools", "#64d9ff"],
  ["minecraft:fishing_rod", "Fishing Rod", "Tools", "#c28c55"],
  ["minecraft:shears", "Shears", "Tools", "#cdd4d6"],
  ["minecraft:flint_and_steel", "Flint and Steel", "Tools", "#aab0b4"],
  ["minecraft:brush", "Brush", "Tools", "#d0aa6b"],
  ["minecraft:compass", "Compass", "Tools", "#bf3939"],
  ["minecraft:clock", "Clock", "Tools", "#e5bd4c"],
  ["minecraft:lead", "Lead", "Tools", "#8b6b4a"],
  ["minecraft:saddle", "Saddle", "Tools", "#8b4e36"],
  ["minecraft:elytra", "Elytra", "Armor", "#8f8a76"],
  ["minecraft:diamond_helmet", "Diamond Helmet", "Armor", "#64d9ff"],
  ["minecraft:diamond_chestplate", "Diamond Chestplate", "Armor", "#64d9ff"],
  ["minecraft:diamond_leggings", "Diamond Leggings", "Armor", "#64d9ff"],
  ["minecraft:diamond_boots", "Diamond Boots", "Armor", "#64d9ff"],
  ["minecraft:netherite_chestplate", "Netherite Chestplate", "Armor", "#4a4148"],
  ["minecraft:netherite_helmet", "Netherite Helmet", "Armor", "#4a4148"],
  ["minecraft:netherite_leggings", "Netherite Leggings", "Armor", "#4a4148"],
  ["minecraft:netherite_boots", "Netherite Boots", "Armor", "#4a4148"],
  ["minecraft:leather_chestplate", "Leather Chestplate", "Armor", "#9b5d35"],
  ["minecraft:golden_apple", "Golden Apple", "Food", "#ffd45d"],
  ["minecraft:enchanted_golden_apple", "Enchanted Golden Apple", "Food", "#d98cff"],
  ["minecraft:cooked_beef", "Steak", "Food", "#9d4a38"],
  ["minecraft:bread", "Bread", "Food", "#d8a75a"],
  ["minecraft:carrot", "Carrot", "Food", "#ff9a3d"],
  ["minecraft:apple", "Apple", "Food", "#d83f3f"],
  ["minecraft:cake", "Cake", "Food", "#f8e7d2"],
  ["minecraft:cookie", "Cookie", "Food", "#b8783e"],
  ["minecraft:melon_slice", "Melon Slice", "Food", "#e65555"],
  ["minecraft:suspicious_stew", "Suspicious Stew", "Food", "#9b5d35"],
  ["minecraft:potion", "Potion", "Magic", "#b56cff"],
  ["minecraft:splash_potion", "Splash Potion", "Magic", "#b56cff"],
  ["minecraft:ender_pearl", "Ender Pearl", "Magic", "#48c49b"],
  ["minecraft:totem_of_undying", "Totem of Undying", "Magic", "#dcb55d"],
  ["minecraft:experience_bottle", "Experience Bottle", "Magic", "#8df07a"],
  ["minecraft:enchanted_book", "Enchanted Book", "Magic", "#b24ee0"],
  ["minecraft:amethyst_shard", "Amethyst Shard", "Magic", "#b874f0"],
  ["minecraft:nether_star", "Nether Star", "Magic", "#e8ffff"],
  ["minecraft:firework_rocket", "Firework Rocket", "Utility", "#ff6b6b"],
  ["minecraft:bucket", "Bucket", "Utility", "#c7d0d2"],
  ["minecraft:water_bucket", "Water Bucket", "Utility", "#4aa4ff"],
  ["minecraft:lava_bucket", "Lava Bucket", "Utility", "#ff7838"],
  ["minecraft:map", "Map", "Utility", "#d6bd82"],
  ["minecraft:name_tag", "Name Tag", "Utility", "#cfcfcf"],
  ["minecraft:armor_stand", "Armor Stand", "Utility", "#b8895a"],
  ["minecraft:bundle", "Bundle", "Utility", "#a66f47"],
  ["minecraft:spyglass", "Spyglass", "Utility", "#d59d4e"],
  ["minecraft:goat_horn", "Goat Horn", "Utility", "#d8c49a"],
  ["minecraft:music_disc_13", "Music Disc 13", "Utility", "#4b4b4b"],
];

const enchants = [
  ["minecraft:sharpness", "Sharpness"],
  ["minecraft:smite", "Smite"],
  ["minecraft:bane_of_arthropods", "Bane of Arthropods"],
  ["minecraft:knockback", "Knockback"],
  ["minecraft:fire_aspect", "Fire Aspect"],
  ["minecraft:looting", "Looting"],
  ["minecraft:sweeping_edge", "Sweeping Edge"],
  ["minecraft:efficiency", "Efficiency"],
  ["minecraft:fortune", "Fortune"],
  ["minecraft:silk_touch", "Silk Touch"],
  ["minecraft:unbreaking", "Unbreaking"],
  ["minecraft:mending", "Mending"],
  ["minecraft:protection", "Protection"],
  ["minecraft:feather_falling", "Feather Falling"],
  ["minecraft:power", "Power"],
  ["minecraft:punch", "Punch"],
  ["minecraft:flame", "Flame"],
  ["minecraft:infinity", "Infinity"],
  ["minecraft:loyalty", "Loyalty"],
  ["minecraft:riptide", "Riptide"],
];

const attributes = [
  ["minecraft:generic.attack_damage", "Attack Damage"],
  ["minecraft:generic.attack_speed", "Attack Speed"],
  ["minecraft:generic.max_health", "Max Health"],
  ["minecraft:generic.movement_speed", "Movement Speed"],
  ["minecraft:generic.armor", "Armor"],
  ["minecraft:generic.armor_toughness", "Armor Toughness"],
  ["minecraft:generic.knockback_resistance", "Knockback Resistance"],
  ["minecraft:generic.luck", "Luck"],
];

const slots = ["any", "mainhand", "offhand", "head", "chest", "legs", "feet"];
const colors = ["white", "gray", "dark_gray", "black", "red", "gold", "yellow", "green", "aqua", "blue", "light_purple", "dark_purple"];
const fonts = ["default", "uniform", "alt", "illageralt"];
const rarities = ["common", "uncommon", "rare", "epic"];
const trimPatterns = ["none", "sentry", "dune", "coast", "wild", "ward", "eye", "vex", "tide", "snout", "rib", "spire", "wayfinder"];
const trimMaterials = ["none", "iron", "copper", "gold", "diamond", "emerald", "redstone", "lapis", "amethyst", "netherite"];

const state = {
  item: itemData[0],
  category: "All",
  enchants: [],
  attrs: [],
};

const $ = (id) => document.getElementById(id);

function optionList(select, entries) {
  select.innerHTML = "";
  entries.forEach((entry) => {
    const option = document.createElement("option");
    option.value = Array.isArray(entry) ? entry[0] : entry;
    option.textContent = Array.isArray(entry) ? entry[1] : entry.replaceAll("_", " ");
    select.append(option);
  });
}

function jsonText(text, color, bold, italic, extra = {}) {
  const value = { text: text || "" };
  if (color) value.color = color;
  if (bold) value.bold = true;
  if (italic) value.italic = true;
  if (extra.underlined) value.underlined = true;
  if (extra.strikethrough) value.strikethrough = true;
  if (extra.obfuscated) value.obfuscated = true;
  if (extra.font && extra.font !== "default") value.font = `minecraft:${extra.font}`;
  if (extra.clickUrl) value.clickEvent = { action: "open_url", value: extra.clickUrl };
  if (extra.hoverText) value.hoverEvent = { action: "show_text", contents: { text: extra.hoverText } };
  return JSON.stringify(value);
}

function safeInt(value, fallback, min, max) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function safeFloat(value, fallback, min, max) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}

function component(key, value) {
  return `${key}=${value}`;
}

function listFromTextarea(id) {
  return $(id).value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function buildModernComponents() {
  const parts = [];
  const itemName = $("itemName").value.trim();
  if (itemName) parts.push(component("item_name", `'${jsonText(itemName, $("nameColor").value, false, false)}'`));
  const name = $("customName").value.trim();
  const textExtra = {
    underlined: $("nameUnderlined").checked,
    strikethrough: $("nameStrikethrough").checked,
    obfuscated: $("nameObfuscated").checked,
    font: $("nameFont").value,
    clickUrl: $("clickUrl").value.trim(),
    hoverText: $("hoverText").value.trim(),
  };
  if (name) parts.push(component("custom_name", `'${jsonText(name, $("nameColor").value, $("nameBold").checked, $("nameItalic").checked, textExtra)}'`));
  const lore = listFromTextarea("lore");
  if (lore.length) {
    parts.push(component("lore", `[${lore.map((line) => `'${jsonText(line, "gray", false, false)}'`).join(",")}]`));
  }
  if (state.enchants.length) {
    const levels = state.enchants.map((e) => `"${e.id}":${e.level}`).join(",");
    parts.push(component("enchantments", `{levels:{${levels}},show_in_tooltip:${!$("hideEnchantments").checked}}`));
  }
  if (state.attrs.length) {
    const values = state.attrs.map((attr, index) => `{type:"${attr.id}",amount:${attr.value},operation:"add_value",id:"emilio_${index}",slot:"${attr.slot}"}`);
    parts.push(component("attribute_modifiers", `[${values.join(",")}]`));
  }
  const canBreak = listFromTextarea("canBreak");
  if (canBreak.length) parts.push(component("can_break", `{predicates:[${canBreak.map((b) => `{blocks:"${b}"}`).join(",")}],show_in_tooltip:true}`));
  const canPlaceOn = listFromTextarea("canPlaceOn");
  if (canPlaceOn.length) parts.push(component("can_place_on", `{predicates:[${canPlaceOn.map((b) => `{blocks:"${b}"}`).join(",")}],show_in_tooltip:true}`));
  if ($("isFood").checked) {
    parts.push(component("food", `{nutrition:${safeInt($("nutrition").value, 4, 0, 100)},saturation_modifier:${safeFloat($("saturation").value, 2.4, 0, 100)},can_always_eat:${$("alwaysEat").checked},eat_seconds:${safeFloat($("eatSeconds").value, 1.6, 0.1, 60)}}`));
  }
  if ($("isTool").checked) {
    const rule = $("correctBlocks").value.trim();
    const rules = rule ? `rules:[{blocks:"#${rule.replace(/^#/, "")}",speed:${safeFloat($("miningSpeed").value, 4, 0, 100)},correct_for_drops:true}],` : "";
    parts.push(component("tool", `{${rules}default_mining_speed:${safeFloat($("miningSpeed").value, 4, 0, 100)},damage_per_block:${safeInt($("damagePerBlock").value, 1, 0, 100)}}`));
  }
  if ($("equipSlot").value !== "any") parts.push(component("equippable", `{slot:"${$("equipSlot").value}"}`));
  if ($("trimPattern").value !== "none" && $("trimMaterial").value !== "none") {
    parts.push(component("trim", `{pattern:"minecraft:${$("trimPattern").value}",material:"minecraft:${$("trimMaterial").value}"}`));
  }
  if ($("unbreakable").checked) parts.push(component("unbreakable", "{}"));
  if (safeInt($("damage").value, 0, 0, 999999) > 0) parts.push(component("damage", safeInt($("damage").value, 0, 0, 999999)));
  if ($("maxDamage").value) parts.push(component("max_damage", safeInt($("maxDamage").value, 1, 1, 999999)));
  if ($("maxStackSize").value) parts.push(component("max_stack_size", safeInt($("maxStackSize").value, 1, 1, 99)));
  if ($("repairCost").value) parts.push(component("repair_cost", safeInt($("repairCost").value, 0, 0, 999999)));
  if ($("modelData").value) parts.push(component("custom_model_data", safeInt($("modelData").value, 0, 0, 999999)));
  if ($("itemModel").value.trim()) parts.push(component("item_model", `"${$("itemModel").value.trim()}"`));
  if ($("tooltipStyle").value.trim()) parts.push(component("tooltip_style", `"${$("tooltipStyle").value.trim()}"`));
  if ($("customData").value.trim()) parts.push(component("custom_data", $("customData").value.trim()));
  if ($("rarity").value !== "common") parts.push(component("rarity", `"${$("rarity").value}"`));
  if ($("enchantmentGlint").checked) parts.push(component("enchantment_glint_override", "true"));
  if ($("hideTooltip").checked) parts.push(component("hide_tooltip", "{}"));
  if ($("hideAdditionalTooltip").checked) parts.push(component("hide_additional_tooltip", "{}"));
  if ($("fireResistant").checked) parts.push(component("fire_resistant", "{}"));
  if ($("glider").checked) parts.push(component("glider", "{}"));
  return parts.length ? `[${parts.join(",")}]` : "";
}

function buildLegacyNbt() {
  const tag = {};
  const display = {};
  const itemName = $("itemName").value.trim();
  if (itemName) display.Name = jsonText(itemName, $("nameColor").value, false, false);
  const name = $("customName").value.trim();
  if (name) display.Name = jsonText(name, $("nameColor").value, $("nameBold").checked, $("nameItalic").checked, {
    underlined: $("nameUnderlined").checked,
    strikethrough: $("nameStrikethrough").checked,
    obfuscated: $("nameObfuscated").checked,
    font: $("nameFont").value,
    clickUrl: $("clickUrl").value.trim(),
    hoverText: $("hoverText").value.trim(),
  });
  const lore = listFromTextarea("lore");
  if (lore.length) display.Lore = lore.map((line) => jsonText(line, "gray", false, false));
  if (Object.keys(display).length) tag.display = display;
  if (state.enchants.length) tag.Enchantments = state.enchants.map((e) => ({ id: e.id, lvl: e.level }));
  if ($("unbreakable").checked) tag.Unbreakable = 1;
  if (safeInt($("damage").value, 0, 0, 999999) > 0) tag.Damage = safeInt($("damage").value, 0, 0, 999999);
  if ($("repairCost").value) tag.RepairCost = safeInt($("repairCost").value, 0, 0, 999999);
  if ($("modelData").value) tag.CustomModelData = safeInt($("modelData").value, 0, 0, 999999);
  const raw = JSON.stringify(tag).replace(/"([A-Za-z0-9_]+)":/g, "$1:");
  return Object.keys(tag).length ? raw : "";
}

function buildCommand() {
  const target = $("target").value.trim() || "@p";
  const amount = safeInt($("amount").value, 1, 1, 99);
  const itemId = state.item[0];
  const modern = $("useComponents").checked && !["1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.20.4"].includes($("version").value);
  const data = modern ? buildModernComponents() : buildLegacyNbt();
  const command = `/give ${target} ${itemId}${data} ${amount}`;
  $("commandOutput").value = command;
  if ($("autoCopy").checked) navigator.clipboard?.writeText(command).catch(() => {});
}

function renderItems() {
  const query = $("itemSearch").value.trim().toLowerCase();
  const results = itemData.filter((item) => {
    const matchesCategory = state.category === "All" || item[2] === state.category;
    const matchesQuery = !query || item[0].includes(query) || item[1].toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
  $("itemCount").textContent = `${results.length} Items`;
  $("itemList").innerHTML = "";
  results.forEach((item) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = `item-row${item[0] === state.item[0] ? " active" : ""}`;
    row.innerHTML = `<span class="item-swatch" style="--swatch:${item[3]}"></span><span><strong>${item[1]}</strong><small>${$("showNamespace").checked ? item[0] : item[0].replace("minecraft:", "")}</small></span>`;
    row.addEventListener("click", () => {
      state.item = item;
      renderSelected();
      renderItems();
      buildCommand();
    });
    $("itemList").append(row);
  });
}

function renderCategories() {
  const cats = ["All", ...new Set(itemData.map((item) => item[2]))];
  $("categoryChips").innerHTML = "";
  cats.forEach((cat) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.textContent = cat;
    chip.className = cat === state.category ? "active" : "";
    chip.addEventListener("click", () => {
      state.category = cat;
      renderCategories();
      renderItems();
    });
    $("categoryChips").append(chip);
  });
}

function renderSelected() {
  $("selectedItemName").textContent = state.item[1];
  $("selectedItemId").textContent = state.item[0];
  $("itemPreview").style.setProperty("--swatch", state.item[3]);
}

function renderTokens() {
  $("enchantList").innerHTML = "";
  state.enchants.forEach((enchant, index) => {
    const token = document.createElement("span");
    token.className = "token";
    token.innerHTML = `${enchant.label} ${enchant.level}<button type="button" aria-label="Remove">x</button>`;
    token.querySelector("button").addEventListener("click", () => {
      state.enchants.splice(index, 1);
      renderTokens();
      buildCommand();
    });
    $("enchantList").append(token);
  });
  $("attributeList").innerHTML = "";
  state.attrs.forEach((attr, index) => {
    const token = document.createElement("span");
    token.className = "token";
    token.innerHTML = `${attr.label} ${attr.value} ${attr.slot}<button type="button" aria-label="Remove">x</button>`;
    token.querySelector("button").addEventListener("click", () => {
      state.attrs.splice(index, 1);
      renderTokens();
      buildCommand();
    });
    $("attributeList").append(token);
  });
}

function switchTab(kind, name) {
  document.querySelectorAll(`[data-${kind}-tab]`).forEach((tab) => tab.classList.toggle("active", tab.dataset[`${kind}Tab`] === name));
  document.querySelectorAll(`[data-${kind}-panel]`).forEach((panel) => panel.classList.toggle("active", panel.dataset[`${kind}Panel`] === name));
}

function toast(text) {
  $("toast").textContent = text;
  $("toast").classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("toast").classList.remove("show"), 1300);
}

function saveData() {
  const fields = {};
  document.querySelectorAll("input, select, textarea").forEach((field) => {
    if (field.id) fields[field.id] = field.type === "checkbox" ? field.checked : field.value;
  });
  localStorage.setItem("emilioGiveGenerator", JSON.stringify({ fields, item: state.item[0], enchants: state.enchants, attrs: state.attrs }));
  toast("Gespeichert");
}

function loadData() {
  const saved = JSON.parse(localStorage.getItem("emilioGiveGenerator") || "null");
  if (!saved) return;
  Object.entries(saved.fields || {}).forEach(([id, value]) => {
    const field = $(id);
    if (!field) return;
    if (field.type === "checkbox") field.checked = value;
    else field.value = value;
  });
  state.item = itemData.find((item) => item[0] === saved.item) || state.item;
  state.enchants = saved.enchants || [];
  state.attrs = saved.attrs || [];
}

function resetAll() {
  localStorage.removeItem("emilioGiveGenerator");
  location.reload();
}

function importCommand() {
  const raw = $("importCommand").value.trim();
  const match = raw.match(/^\/give\s+(\S+)\s+([a-z0-9_:.-]+)(?:\[|\{|\s|$)/i);
  if (!match) {
    toast("Import nicht erkannt");
    return;
  }
  $("target").value = match[1];
  state.item = itemData.find((item) => item[0] === match[2] || item[0].endsWith(`:${match[2]}`)) || state.item;
  const amount = raw.match(/\s(\d+)$/);
  if (amount) $("amount").value = amount[1];
  renderSelected();
  renderItems();
  buildCommand();
  toast("Import geladen");
}

function init() {
  optionList($("nameColor"), colors);
  optionList($("nameFont"), fonts);
  optionList($("enchantSelect"), enchants);
  optionList($("attributeType"), attributes);
  optionList($("attributeSlot"), slots);
  optionList($("equipSlot"), slots);
  optionList($("trimPattern"), trimPatterns);
  optionList($("trimMaterial"), trimMaterials);
  optionList($("rarity"), rarities);
  loadData();
  renderCategories();
  renderSelected();
  renderItems();
  renderTokens();
  buildCommand();
}

document.querySelectorAll("[data-main-tab]").forEach((tab) => tab.addEventListener("click", () => switchTab("main", tab.dataset.mainTab)));
document.querySelectorAll("[data-detail-tab]").forEach((tab) => tab.addEventListener("click", () => switchTab("detail", tab.dataset.detailTab)));
document.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    renderItems();
    buildCommand();
  });
  field.addEventListener("change", buildCommand);
});
document.querySelectorAll("[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-target]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    $("target").value = button.dataset.target;
    buildCommand();
  });
});
$("clearSearch").addEventListener("click", () => {
  $("itemSearch").value = "";
  renderItems();
});
$("addEnchant").addEventListener("click", () => {
  const id = $("enchantSelect").value;
  const label = enchants.find((entry) => entry[0] === id)[1];
  const level = safeInt($("enchantLevel").value, 1, 1, 255);
  const existing = state.enchants.find((item) => item.id === id);
  if (existing) existing.level = level;
  else state.enchants.push({ id, label, level });
  renderTokens();
  buildCommand();
});
$("addAttribute").addEventListener("click", () => {
  const id = $("attributeType").value;
  const label = attributes.find((entry) => entry[0] === id)[1];
  const value = safeFloat($("attributeValue").value, 1, -999, 999);
  const slot = $("attributeSlot").value;
  state.attrs.push({ id, label, value, slot });
  renderTokens();
  buildCommand();
});
$("copyCommand").addEventListener("click", () => navigator.clipboard?.writeText($("commandOutput").value).then(() => toast("Command kopiert"), () => toast("Kopieren nicht erlaubt")));
$("saveData").addEventListener("click", saveData);
$("resetAll").addEventListener("click", resetAll);
$("importBtn").addEventListener("click", importCommand);

init();
