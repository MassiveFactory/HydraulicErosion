/**
 * Parameters for volcano generation
 * @param {Number} [volcanoThreshold] A height value above which volcanoes are created
 * @param {Number} [volcanoThresholdAmplitude] The amplitude of volcano threshold randomization
 * @param {Number} [volcanoThresholdScale] The scale of the volcano threshold randomization noise
 * @param {Number} [volcanoMaxDepth] The maximum volcano depth
 * @param {Number} [volcanoCraterScale] The slope scale of volcano craters
 * @constructor
 */
const VolcanoesParameters = function(
    volcanoThreshold = 2.5,
    volcanoThresholdAmplitude = 2,
    volcanoThresholdScale = .2,
    volcanoMaxDepth = .5,
    volcanoCraterScale = .5) {
    this.volcanoThreshold = volcanoThreshold;
    this.volcanoThresholdAmplitude = volcanoThresholdAmplitude;
    this.volcanoThresholdScale = volcanoThresholdScale;
    this.volcanoMaxDepth = volcanoMaxDepth;
    this.volcanoCraterScale = volcanoCraterScale;
};