// The MIT License (MIT)
//
// Copyright (c) 2016 Hannes Hochreiner
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

let speedOfLight = 299792458; // m/s
let conductivityOfCopper = 5.96e7; // S/m
let permeabilityOfCopper = 1.256629e-6; // H/m

export function checkAssumption(perimeter, wavelength) {
  return perimeter < 0.3 * wavelength;
}

export function convertFrequencyToWavelength(frequency) {
  return speedOfLight / frequency;
}

export function calculateRadiationResistance(area, frequency) {
  return 320 * Math.pow(Math.PI / speedOfLight * frequency, 4) * Math.pow(area, 2);
}

export function calculateLossResistance(perimeter, widthOfTrace, frequency) {
  return perimeter * Math.sqrt(Math.PI * frequency * permeabilityOfCopper / conductivityOfCopper) / (2 * widthOfTrace);
}

export function calculateRadiationEfficiency(radiationResistance, lossResistance, capacitorResistance) {
  return radiationResistance / (radiationResistance + lossResistance + capacitorResistance);
}

export function calculateInductance(perimeter, widthOfTrace, area) {
  return permeabilityOfCopper / (2 * Math.PI) * perimeter * Math.log(8 * area / (perimeter * widthOfTrace));
}

export function calculateCapacitance(frequency, inductance) {
  let freqRad = 2 * Math.PI * frequency;

  return 1 / (Math.pow(freqRad, 2) * inductance);
}

export function calculateC1(frequency, inductance, inputImpedance, seriesResistance) {
  let freqRad = 2 * Math.PI * frequency;

  return 1 / (freqRad * (freqRad * inductance - Math.sqrt(inputImpedance * seriesResistance - Math.pow(seriesResistance, 2))));
}

export function calculateC2(frequency, inductance, seriesResistance, C1) {
  let freqRad = 2 * Math.PI * frequency;

  return (inductance - 1 / (Math.pow(freqRad, 2) * C1)) / (Math.pow(seriesResistance, 2) + Math.pow(freqRad * inductance - (1 / (freqRad * C1)) , 2));
}
