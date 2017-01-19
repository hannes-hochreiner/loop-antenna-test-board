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

import * as la from "./loopAntenna";

// The antenna is a one inch square.
// The corners are cut at 50 mils.
let sideA = 0.0254; // m
let sideB = 0.0254 - 2 * 0.00127; // m
let cut = 0.00127; // m
let area = sideA * sideB - 2 * Math.pow(cut, 2); // m²
let perimeter = 2 * (sideA + sideB) + 4 * (cut * (Math.sqrt(2) - 2)); // m
let frequency = 434000000; // Hz
let widthOfTrace = 0.0014; // m
let capacitorResistance = 0.05; // Ohm
let inputImpedance = 50; // Ohm

console.log(`Area: ${area} m² (regular: ${sideA * sideB} m²)`);
console.log(`Perimeter: ${perimeter} m (regular: ${2 * (sideA + sideB)} m)`);
console.log(`Assumption holds: ${la.checkAssumption(perimeter, frequency)}`);

let radiationResistance = la.calculateRadiationResistance(area, frequency); // ohm

console.log(`Radiation resistance: ${radiationResistance} Ohm`);

let lossResistance = la.calculateLossResistance(perimeter, widthOfTrace, frequency); // ohm

console.log(`Loss resistance: ${lossResistance} Ohm`);

let radiationEfficiency = la.calculateRadiationEfficiency(radiationResistance, lossResistance, capacitorResistance);

console.log(`Radiation efficiency: ${radiationEfficiency} (${10 * Math.log(radiationEfficiency)} dB)`);

let inductance = la.calculateInductance(perimeter, widthOfTrace, area); // H
let capacitance = la.calculateCapacitance(frequency, inductance); // F
let seriesResistance = radiationResistance + lossResistance + capacitorResistance; // Ohm
let c1 = la.calculateC1(frequency, inductance, inputImpedance, seriesResistance); // F
let c2 = la.calculateC2(frequency, inductance, seriesResistance, c1); // F

console.log(`C1: ${c1 * 1e12} pF`);
console.log(`C2: ${c2 * 1e12} pF`);

let sll = la.calculateSecondaryLoopLength(frequency, seriesResistance, inputImpedance);

console.log(`secondary loop length: ${sll * 1e3} mm`);
