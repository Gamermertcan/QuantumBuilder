Blockly.Blocks["number_between"] = {
  init: function () {
    this.appendDummyInput().appendField("number between");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

javascript.javascriptGenerator.forBlock["number_between"] = function (
  block,
  generator
) {
  const code = 'Math.floor(Math.random * (10 - 1 + 1))';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
