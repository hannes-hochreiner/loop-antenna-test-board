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

import * as la from "../bld/loopAntenna";

describe("Loop Antenna", () => {
  it("should provide a function to convert a frequency to a wavelength", () => {
    expect(la.convertFrequencyToWavelength(434000000)).toBe(299792458 / 434000000);
  });

  it("should provide a function to check whether the assumptions hold", () => {
    let wl = la.convertFrequencyToWavelength(434000000);

    expect(la.checkAssumption(0.08, wl)).toBe(true);
    expect(la.checkAssumption(10, wl)).toBe(false);
  });

  it("should provide a function to calculate the radiation resistance", () => {
    expect(Math.round(la.calculateRadiationResistance(0.034 * 0.012, 434000000) * 10000) / 10000).toBe(0.0228);
  });

  it("should provide a function to calculate the loss resistance", () => {
    expect(Math.round(la.calculateLossResistance((0.034 + 0.012) * 2, 0.002, 434000000) * 1000) / 1000).toBe(0.123);
  });

  it("should provide a function to calculate the radiation efficiency", () => {
    expect(Math.round(la.calculateRadiationEfficiency(0.0228, 0.123, 0.138) * 1000) / 1000).toBe(0.08);
  });

  it("should provide a function to calculate the inductance", () => {
    expect(Math.round(la.calculateInductance((0.034 + 0.012) * 2, 0.002, 0.034 * 0.012) * 1e10) / 1e10).toBe(52.9e-9);
  });

  it("should provide a function to calculate the capacitance", () => {
    expect(Math.round(la.calculateCapacitance(434000000, 52.9e-9) * 1e14) / 1e14).toBe(2.54e-12);
  });

  it("should provide a function to calculate the value of C1", () => {
    expect(Math.round(la.calculateC1(434000000, 52.9e-9, 1400, 0.0228 + 0.123 + 0.138) * 1e14) / 1e14).toBe(2.95e-12);
  });

  it("should provide a function to calculate the value of C2", () => {
    expect(Math.round(la.calculateC2(434000000, 52.9e-9, 0.0228 + 0.123 + 0.138, 2.95e-12) * 1e13) / 1e13).toBe(18.4e-12);
  });
});
